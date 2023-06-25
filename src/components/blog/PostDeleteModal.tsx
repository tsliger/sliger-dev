import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai/index";
import ky from "ky";
import { Formik } from "formik";
import { object, string } from 'yup';
import { useStore } from "@nanostores/react";
import { jwtToken } from "../../stores/jwtStore";

export default function PostDeleteModal({
  isDeleteModalOpen,
  setDeleteModal,
  postId,
}) {
  const $jwtToken = useStore(jwtToken)
  const url = import.meta.env.PUBLIC_BACKEND_URL
  const [postData, setPostData] = useState(undefined);
  const fetchPost = async (postId: number) => {
    const data: any = await ky.get(`${url}/api/posts/${postId}?populate=*`).json();

    if (data) {
      setPostData(data.data);
    }
  };

  let slugSchema = object({
    slug: string().min(1).matches(new RegExp(postData ? postData.attributes.slug : undefined), "Does not match slug").required(),
  });

  useEffect(() => {
    fetchPost(postId);
  }, [postId]);

  const deletePost = async () => {
    const contents = postData.attributes.contents.data
    
    if (contents) {
      contents.forEach((obj) => {
        const id = obj.id
        ky.delete(`${url}/api/contents/${id}`, { headers: { Authorization: `Bearer ${$jwtToken}` } })
      })
    }
    // Delete post via api
    const data = await ky.delete(`${url}/api/posts/${postId}`, { headers: { Authorization: `Bearer ${$jwtToken}` } })

    if (data) {
      setDeleteModal(false)
    }
  }

  return (
    <Modal open={isDeleteModalOpen} className="grid place-items-center">
      <div className="h-96 px-6 py-6 w-96 lg:w-[500px] lg:h-[350px] shadow-sm bg-[#403d39] border-[1.5px] border-black/20 rounded-md flex flex-col  overflow-hidden z-[60]">
        <div className="w-full flex">
          <p className="flex-grow h-full flex items-center text-white font-mono select-none">
            Delete post {postData && postData.attributes.slug}?
          </p>
          <button
            className={
              "text-[#FFE6C7]  w-12 h-10 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid place-items-center"
            }
            onClick={() => setDeleteModal(false)}
          >
            <AiOutlineClose />
          </button>
        </div>
        <Formik initialValues={{ slug: "" }} onSubmit={deletePost} validationSchema={slugSchema}>
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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full h-full justify-around"
            >
              <div className="w-full flex flex-col">
                <div className="h-4 text-xs text-red-500">{errors.slug}</div>
                <label
                  htmlFor="slug"
                  className="my-2 font-semibold font-mono text-white"
                >
                  Slug
                </label>
                <input
                  name="slug"
                  className="input-field mb-4 w-full"
                  onChange={handleChange}
                  placeholder={postData && postData.attributes.slug}
                />
              </div>
              <button type="submit" disabled={(errors.slug !== undefined)} className="text-[#FFE6C7] h-12 px-3 disabled:scale-100 disabled:cursor-not-allowed text-xs font-mono border-2 border-black/20 font-bold rounded-xl w-20 grid place-items-center mx-auto shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">
                Delete
              </button>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}
