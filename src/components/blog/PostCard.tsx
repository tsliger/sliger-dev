import { useEffect, useState } from "react";
import { Post } from "./Posts";
import { useStore } from "@nanostores/react";
import { jwtToken } from "../../stores/jwtStore";
import PostEditButton from "./PostEditButton";
import { BlurhashCanvas } from "react-blurhash";
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

interface PostCardProps {
  post: Post;
  authors: any;
  categories: any;
  image: any;
  postId: number;
}

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function PostCard({
  post,
  authors,
  categories,
  image,
  postId
}: PostCardProps) {
  const [isHover, setHover] = useState(false);
  const [isDropdownOpen, setDropOpen] = useState(false)
  const [imageLoaded, setLoad] = useState(false)
  const { ref, inView, entry } = useInView();
  const createdAt = new Date(post.createdAt);
  const $token = useStore(jwtToken);

  useEffect(() => {
    if (inView === true) {
      const target = entry.target as HTMLImageElement;

      const source = entry.target.getAttribute('load-src');

      target.src = source;
    } 
  }, [inView])


  const checkTouch = async() => {
    setHover(isHover === false ? true : false);
  };

  const endHover = async() => {
    setHover(false);
  }

  const startHover = async() => {
    setHover(true);
  }

  const changeLoad = async() => {
    setTimeout(() => {
      setLoad(true)
    }, 100)
  }

  return (
    <Tilt tiltMaxAngleX={2} tiltMaxAngleY={0}>
    <div
      onTouchStart={checkTouch}
      onMouseEnter={startHover}
      onMouseLeave={endHover}
      className={`${
        isHover ? "shadow-lg" : "opacity-70"
      } z-30 overflow-hidden relative bg-gradient-to-bl my-8 hover:bg-black/10  from-[#FFFFFF]/20 from-10%  to-black/20 select-none text-white ease-in-out transition duration-300 w-[350px] md:w-[400px] h-[325px] rounded-md shadow-xl shadow-black/30 hover:shadow-lg p-4`}
    >
      {$token && (
        <>
          <PostEditButton onClick={() => setDropOpen(!isDropdownOpen)} {...{isDropdownOpen, postId, setDropOpen}} />
        </>
      )}
      <h1
        className={`${
          isHover ? "" : "opacity-70"
        } transition duration-300 font-semibold tracking-wider text-2xl`}
      >
        {post.title}
      </h1>
      <div
        className={`${
          isHover ? "" : "opacity-50"
        }  text-[0.8rem] space-y-1 py-2`}
      >
        <p
          className={`font-mono  underline-offset-2 text-[#FF6000] font-semibold underline text-sm ease-in-out`}
        >
          {categories[0].attributes.name}
        </p>
      </div>
      <div
        className={`${imageLoaded ? "opacity-10" : "opacity-0"} absolute -z-10 duration-300 transition top-0 left-0 w-full h-[50%] overflow-hidden ease-in  flex items-center`}
      >
        {image && (
          <img
            className={`${
              isHover ? "scale-105 grayscale-0" : "grayscale"
            } transition duration-[600ms] ease-in-out w-full`}
            ref={ref}
            draggable={false}
            load-src={image.attributes.url}
            onLoad={changeLoad}
            alt=""
          />
        )}
      </div>
      {image.attributes.blurhash && 
        <div
          className={`absolute grayscale -z-10 duration-300 transition top-0 left-0 w-full h-[50%] overflow-hidden opacity-30 animate-pulse flex items-center`}
        >
          {imageLoaded === false && (
            <BlurhashCanvas hash={image.attributes.blurhash} className="w-full"/>
          )}
        </div>
      }
      <div className="absolute bottom-16 h-16 overflow-hidden w-full px-4 left-0">
        <div
          className={`${
            !isHover ? "delay-300" : "opacity-0"
          } px-4 text-[0.8rem] tracking-wider font-mono`}
        >
          <p className="opacity-50">
            Posted: {createdAt.toLocaleDateString(undefined, options as any)}
          </p>
          <h2 className="tracking-wider font-mono opacity-50">
            Author: {authors.attributes.name}
          </h2>
        </div>
        <p
          className={`${
            isHover ? "delay-300 opacity-50" : "translate-y-4 opacity-0"
          } absolute top-0 transition duration-[600ms]  ease-in-out text-sm px-8`}
        >
          {post.excerpt}
        </p>
      </div>

      <a
        draggable={false}
        href={"/blog/" + post.slug}
        className={`${
          isHover ? "opacity-90 delay-300" : "opacity-0"
        } font-mono duration-300 ease-in-out absolute w-full left-0 bottom-0 h-16 grid place-items-center px-4 text-md transition rounded-sm origin-center hover:cursor-pointer hover:text-[#FF6000] active:text-[#FF6000] font-semibold tracking-widest text-sm`}
      >
        Read More...
      </a>
    </div>
    </Tilt>
  );
}
