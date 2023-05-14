import React, { useState } from 'react'
import { RxDoubleArrowRight } from "react-icons/rx"

export default function BlogDropdownArticle({ post=undefined, i, postsLoading }) {
  const [isHovering, setHover] = useState(false)
  if (postsLoading || post === undefined) {
    return <div className="relative h-1/2 px-4 py-2 z-50" key={post.attributes.slug + i}>
              <div>
                  <div className="text-sm bg-black/20 h-5 rounded-md hover:text-[#FF6000] animate-pulse transition-all duration-150"/>
                  <div className="text-sm bg-black/20 h-5 w-1/3 mt-2 rounded-md hover:text-[#FF6000] animate-pulse transition-all duration-150"/>
              </div>
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 grayscale z-[-1]">
                 
              </div>
          </div>
  }
  console.log(post.attributes.featured_image.data.attributes)
  return (
    <a href={"/blog/" + post.attributes.slug}>
      <div className={`hover:text-[#FF6000] bg-filter hover:underline underline-offset-4 cursor-pointer relative h-1/2 px-4 py-2 z-50`} key={post.attributes.slug} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="flex">
              {isHovering && (
                <div className="text-sm p-1 pr-1">
                  <RxDoubleArrowRight />
                </div>
              )}
              <h6 className={`text-sm transition-all duration-150 z-[60]`}>
                {post.attributes.title}
              </h6>
            </div>
          <div className={`absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 flex flex-col justify-center  z-[-1] `}>
            {post.attributes.featured_image.data.attributes.formats.thumbnail && 
              <img className={`${isHovering ? "scale-105" : "grayscale" } delay-75 transition-all duration-[1000ms]`} src={"http://localhost:1337" + post.attributes.featured_image.data.attributes.url}/>
            }
          </div>
      </div>
    </a>
  )
}
