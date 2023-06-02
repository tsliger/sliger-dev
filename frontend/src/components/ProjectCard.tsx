import { useEffect, useState, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

export default function ProjectCard({ data }) {
  const [isActive, setActive] = useState(false);
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

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="w-[340px] h-[400px] experience-card text-white flex flex-col overflow-hidden"
    >
      <h1 className="text-2xl font-mono font-semibold  px-4 py-3 z-40 ">
        {data.attributes.title}
      </h1>
      <div className="h-42 relative space-y-2 overflow-hidden">
        <div className="bg-filter">
          <img
            ref={imageRef}
            load-src={
              "http://localhost:1337" +
              data.attributes.banner_image.data.attributes.url
            }
            className={`${
              isActive ? "opacity-20 scale-100" : "scale-105 opacity-10 grayscale"
            } transition duration-[1200ms] origin-center ease-in-out object-fit `}
          />
        </div>
        <div className="w-full absolute bottom-0 left-0 h-8 bg-gradient-to-t from-black/30" />
      </div>
      <div className="w-full h-24 py-4 px-4 ">
        <p>{data.attributes.description}</p>
      </div>
      <div className="flex-grow" />
      <a
        className="button-style duration-[600ms] self-end hover:scale-105 w-24 mb-4 mx-4"
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
