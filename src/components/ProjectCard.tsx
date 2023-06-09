import { useEffect, useState, useRef } from "react";
import { AiFillGithub } from "react-icons/ai/index";
import { useInView } from "react-intersection-observer";
import { BlurhashCanvas } from "react-blurhash";

export default function ProjectCard({ data }) {
  const [isActive, setActive] = useState(false);
  const [imageLoaded, setLoad] = useState(false);
  const imageRef = useRef(undefined)
  const { ref, inView } = useInView({});


  useEffect(() => {
    if (window.innerWidth <= 800) {
      if (inView) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    // lazy load
    if (inView) {
      const target = imageRef.current as HTMLImageElement;

      const source = target.getAttribute('load-src');

      target.src = source;
    }
  }, [inView]);

  const changeLoad = () => {
    setTimeout(() => {
      setLoad(true)
    }, 300)
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="w-[340px] h-[350px] lg:h-[400px] experience-card text-white flex flex-col overflow-hidden"
    >
      <h1 className="lg:text-2xl font-mono font-semibold  px-4 py-3 z-40 ">
        {data.attributes.title}
      </h1>
      <div className="h-36 lg:h-42 relative space-y-2 overflow-hidden">
        <div className="bg-filter">
          <div className={`${imageLoaded ? "opacity-100" : "opacity-0"}`}>
            <img
              ref={imageRef}
              load-src={
                data.attributes.banner_image.data[0].attributes.url
              }
              onLoad={changeLoad}
              className={`${
                isActive ? "scale-100 opacity-30" : "scale-105 opacity-10 grayscale"
              } transition duration-[1200ms] origin-center ease-in-out object-fit `}
            />
          </div>
          {data.attributes.banner_image.data[0].attributes.blurhash && 
            <div
              className={`absolute grayscale -z-10 duration-300 transition top-0 left-0 w-full h-full overflow-hidden opacity-10 animate-pulse flex items-center`}
            >
              {imageLoaded === false && (
                <BlurhashCanvas hash={data.attributes.banner_image.data[0].attributes.blurhash} className="w-full opacity-30"/>
              )}
            </div>
          }
        </div>
        <div className="w-full absolute bottom-0 left-0 h-8 bg-gradient-to-t from-black/30" />
      </div>
      <div className="text-sm lg:text-base w-full h-24 py-4 px-4 ">
        <p>{data.attributes.description}</p>
      </div>
      <div className="flex-grow" />
      <a
        className="button-style duration-[600ms] self-end active:scale-[0.95] w-24 mb-4 mx-4"
        target="_blank"
        rel="noopener noreferrer"
        href={data.attributes.github_link}
      >
        <div className="flex items-center space-x-2">
          <AiFillGithub />
          <p>Github</p>
        </div>
      </a>
    </div>
  );
}
