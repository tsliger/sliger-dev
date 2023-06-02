import ky from "ky"
import { useState } from 'react'
import PostButton from "../buttons/PostButton"
import { Formik } from 'formik';
import { useStore } from "@nanostores/react";
import { jwtToken } from "../../stores/jwtStore";

export default function PostCreator() {
  const [uploadedFile, setFile] = useState(undefined);
  const $jwtToken = useStore(jwtToken)
  return (
    <div className="w-[600px] mx-auto flex-grow flex flex-col items-center text-white">
        <Formik
            initialValues={{ title: '', excerpt: '', content: '', categories: '', authors: '' }}
            onSubmit={ async (values, { setSubmitting }) => {
              // Upload file
              const formData = new FormData()

              formData.append('files', uploadedFile)

              try {
                var resp: any = await ky.post('http://localhost:1337/api/upload', {body: formData, headers: { Authorization: `Bearer ${$jwtToken}` }}).json();
              } catch (error) {
                if (error.name === 'HTTPError') {
                  const errorJson = await error.response.json();
                }
              }

              if (resp) {
                // Uploaded photo ID
                const photoId = resp[0].id;
                // Post the article
                try {
                  const res: any = await ky.post('http://localhost:1337/api/posts', {
                    json: {
                      "data": {
                        "title": values.title,
                        "excerpt": values.excerpt,
                        "content": values.content,
                        "visible": true,
                        "categories": {
                            "id": 1
                        },
                        "author" : {
                            "id": 1
                        },
                        "featured_image": {
                            "id": photoId
                        }
                      }
                    }, 
                    headers: { Authorization: `Bearer ${$jwtToken}` }
                  }).json();

                  setSubmitting(false)
                  const slug = res.data.attributes.slug
                  if (slug) {
                    window.location.href = "/blog/" + slug;
                  }
                } catch (error) {
                  if (error.name === 'HTTPError') {
                    const errorJson = await error.response.json();
                  }
                }
              }
            }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit} className="flex flex-col w-[400px]">
            <label htmlFor="n/a" className="my-2 font-semibold font-mono">Banner Image</label>
            <label htmlFor="file" className='cursor-pointer text-[#FFE6C7]  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none my-2 duration-150 transition grid-items-center'>Click To Add Image</label>
            <input id="file" type="file" name="file" className="hidden" onChange={(e) => { setFile(e.target.files[0])} }></input>
            <label htmlFor="title" className="my-2 font-semibold font-mono">Title</label>
            <input name="title" className="input-field mb-4 w-full" onChange={handleChange}/>
            <label htmlFor="excerpt" className="my-2 font-semibold font-mono">Excerpt</label>
            <textarea name="excerpt" className="input-field mb-4 py-2 resize-none h-32 w-full" onChange={handleChange}/>
            <label htmlFor="content" className="my-2 font-semibold font-mono">Content</label>
            <textarea name="content" className="input-field mb-4 py-2 resize-none h-96 w-full" onChange={handleChange}/>
            <label htmlFor="categories" className="my-2 font-semibold font-mono">Categories</label>
            <select name="categories" className="input-field mb-4 py-2 resize-none w-full" onChange={handleChange}/>
            <label htmlFor="authors" className="my-2 font-semibold font-mono">Author(s)</label>
            <select name="authors" className="input-field mb-4 py-2 resize-none w-full" onChange={handleChange}/>
            <PostButton isSubmitting={isSubmitting}/>
        </form>
        )}
        </Formik>
    </div>
  )
}