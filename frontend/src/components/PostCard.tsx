import React, { useState } from 'react'
import { Post } from './Posts';

interface PostCardProps {
    post: Post
    authors: any;
    categories: any;
    image: any;
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function PostCard({post, authors, categories, image}: PostCardProps) {
  const [isHover, setHover] = useState(false)
  const createdAt = new Date(post.createdAt)

  const checkHover = () => {
    setHover(isHover === false ? true : false)
  }

  // console.log(categories[0].attributes.name)
  console.log()

  return (
    <div onTouchStart={checkHover} onMouseEnter={checkHover} onMouseLeave={checkHover} className={`${isHover ? "translate-y-1.5 shadow-lg" : "opacity-70"} overflow-hidden relative bg-gradient-to-bl hover:bg-black/10  from-[#FFFFFF]/20 from-10%  to-black/20 select-none text-white ease-in-out transition duration-300 hover:translate-y-1.5 w-[400px] h-[325px] rounded-md shadow-xl shadow-black/30 hover:shadow-lg p-4`}>
        <h1 className={`${isHover ? "" : "opacity-70"} transition duration-300 font-semibold tracking-wider text-2xl`}>{post.title}</h1>
        <div className={`${isHover ? "" : "opacity-50"}  text-[0.8rem] space-y-1 py-2`}>
          <p className={`font-mono text-[#FF6000] font-semibold underline text-sm ease-in-out`}>{categories[0].attributes.name}</p>
        </div>
        <div className={`absolute -z-10 duration-300 transition top-0 left-0 w-full h-[50%] overflow-hidden opacity-10`}>
          <img className={`${isHover ? "scale-105 grayscale-0" : "grayscale"} transition duration-[600ms] ease-in-out`} src={"http://localhost:1337" + image.attributes.url} alt="" /> 
        </div>
        <div className="absolute bottom-16 h-16 overflow-hidden w-full px-4 left-0">
          <div className={`${!isHover ? 'delay-300' : 'opacity-0'} px-4 text-[0.8rem] tracking-wider font-mono`}>
            <p className="opacity-50">Posted: {createdAt.toLocaleDateString(undefined, options as any)}</p>
            <h2 className="tracking-wider font-mono opacity-50">Author: {authors.attributes.name}</h2>
          </div>
          <p className={`${isHover ? 'delay-300 opacity-50' : 'translate-y-4 opacity-0'} absolute top-0 transition duration-[600ms]  ease-in-out text-sm px-8`}>{post.excerpt}</p>
        </div>
        
        <a  href={"/posts/" + post.slug} className={`${isHover ? 'opacity-90 delay-300' : 'opacity-0'} font-mono duration-300 ease-in-out absolute w-full left-0 bottom-0 h-16 grid place-items-center px-4 text-md transition rounded-sm origin-center hover:cursor-pointer hover:text-[#FF6000] active:text-[#FF6000] font-semibold tracking-widest text-sm`}>Read More...</a>
       
      </div>
  )
}
