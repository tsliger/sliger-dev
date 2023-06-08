import React, { useState, useEffect } from 'react'
import { RxDoubleArrowRight } from "react-icons/rx/index"
import { BlurhashCanvas } from "react-blurhash";
import { useInView } from "react-intersection-observer";


export default function BlogDropdownArticle({ post=undefined, i, postsLoading }) {
  const [isHovering, setHover] = useState(false)
  const [imageLoaded, setLoad] = useState(false)


  const { ref, inView, entry } = useInView({});

  useEffect(() => {
    // lazy load
    if (inView) {
      const target = entry.target as HTMLImageElement;

      const source = entry.target.getAttribute('load-src');

      target.src = source;

      setLoad(true)
    }
  }, [inView]);

  if (postsLoading || post === undefined) {
    return <div className="relative h-1/2 px-4 py-2 z-50" key={post.attributes.slug + i}>
              <div>
                  <div className="text-sm bg-black/20 h-5 rounded-md hover:text-[#FF6000] animate-pulse transition-all duration-150"/>
                  <div className="text-sm bg-black/20 h-5 w-1/3 mt-2 rounded-md hover:text-[#FF6000] animate-pulse transition-all duration-150"/>
              </div>
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 grayscale z-[-1]">
                {imageLoaded === false && (
                  <BlurhashCanvas hash={post.attributes.featured_image.data.attributes.blurhash} className="w-full"/>
                )}
              </div>
          </div>
  }
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
          <div className={`${imageLoaded ? "opacity-20" : "opacity-0"} transition-all duration-300 ease-in  absolute top-0 left-0 w-full h-full overflow-hidden  flex flex-col justify-center  z-[-1] `}>
            {post.attributes.featured_image.data.attributes.formats.thumbnail && 
              <img ref={ref} className={`${isHovering ? "scale-105" : "grayscale" } delay-75 transition-all duration-[1000ms]`} load-src={post.attributes.featured_image.data.attributes.url}/>
            }
          </div>
          <div className={`absolute top-0 grayscale left-0 w-full h-full overflow-hidden opacity-20 flex flex-col justify-center  z-[-1] `}>
            {imageLoaded === false && (
              <BlurhashCanvas hash={post.attributes.featured_image.data.attributes.blurhash} className="w-full"/>
            )}
          </div>
      </div>
    </a>
  )
}
