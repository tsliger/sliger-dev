import { useEffect, useState, useRef } from 'react'
import { motion } from "framer-motion"
import useSWR from "swr";
import BlogDropdownArticle from './BlogDropdownArticle';
import { LoadingCircle } from "../utils/Loading";

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function BlogDropdown({ setBlogOpen, blogOpen }) {
  const [posts, setPosts] = useState(undefined);
  const dropRef = useRef(undefined)
  const url = import.meta.env.PUBLIC_BACKEND_URL;
  const { data, error, isLoading } = useSWR(
    `${url}/api/posts?pagination[page]=1&pagination[pageSize]=2&populate=*`,
    fetcher
  );

  useEffect(() => {
    async function click(event) {
      if (dropRef.current.contains(event.target)) {
        setBlogOpen(true)
      } else {
        setBlogOpen(false)
      }
    }

    if (blogOpen) {
      setTimeout(() => {
        document.body.addEventListener('click', click);
      }, 1)
    } else {
      setTimeout(() => {
        document.body.removeEventListener('click', click)
      }, 1)
    }

    return () => {
      setTimeout(() => {
        document.body.removeEventListener('click', click)
      }, 1)
    }
  }, [dropRef, blogOpen, setBlogOpen])

 

  const variants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: {  ease: "easeInOut", duration: 0.35 } },
    hidden: { opacity: 0, y: -10, scale: 0.95, transition: {  ease: "easeInOut", duration: 0.2 }  },
  }



  return (
      <div ref={dropRef} className="absolute w-80 h-72 origin-top top-0 right-0 translate-y-[5.5rem] z-50 rounded-xl ">
        <motion.div
            variants={variants}
            initial="hidden"
            animate={blogOpen ? "visible" : "hidden"}
            transition={{ delay: 0.15, ease: "easeInOut", duration: 0.25 }}
            className="shadow-xl bg-[#403d39] border-[1.5px] border-black/20 h-full absolute w-full rounded-xl flex flex-col overflow-hidden"
        > 
          <div className="border-b-[1.5px]  border-black/20 w-full h-12 flex items-center pl-4 font-bold" draggable={false}>
            Recent Posts
          </div>

          {isLoading && (
            <div className="border-b-[1.5px] relative grid place-items-center border-black/20 flex-grow">
              <LoadingCircle />
            </div>
          )}
          {!isLoading && (
            <div className="border-b-[1.5px] border-black/20 flex-grow">
              {data && data.data && 
                data.data.map((post: any, i) => {
                  console.log(post)
                  return (
                    <BlogDropdownArticle key={i} post={post} i={i} postsLoading={isLoading}/>
                  )
              })}
            </div>
          )}
          <a  href="/blog" className="w-full h-16 hover:underline underline-offset-4 hover:text-[#FF6000] transition-all text-xs duration-150 flex items-center px-4" draggable={false}>
            View all posts...
          </a>
        </motion.div>
      </div>
  )
}
