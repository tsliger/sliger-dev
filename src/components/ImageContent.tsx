import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { BlurhashCanvas } from "react-blurhash";
import { RiLoader5Line } from "react-icons/ri";

const ImageContent = ({ image }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const imageRef = useRef(undefined);
  const [isLoaded, setLoad] = useState(false);
  const url = image.data.attributes.url;
  const blurHash = image.data.attributes.blurhash;

  useEffect(() => {
    if (inView === true) {
      const target = imageRef.current as HTMLImageElement;

      const source = target.getAttribute("load-src");

      target.src = source;
    }
  }, [inView]);

  const changeLoad = () => {
    setTimeout(() => {
      setLoad(true);
    }, 300);
  };

  return (
    <div
      ref={ref}
      className="select-none my-4 lg:my-12 mb-16 overflow-hiddden flex items-center justify-center "
    >
      <div
        className={`${
          isLoaded ? "hidden" : "visible"
        } rounded-lg relative overflow-hidden w-full animate-pulse max-w-full`}
        style={{
          aspectRatio:
            image.data.attributes.width / image.data.attributes.height,
          width: image.data.attributes.width,
        }}
      >
        <BlurhashCanvas
          className="w-full shadow-lg shadow-black/20 h-full  opacity-30 border-[3px] border-black/20"
          hash={blurHash}
        />
        <div className="absolute w-full h-full grid place-items-center left-0 top-0">
          <div className="animate-spin text-white/20">
            <RiLoader5Line size={50} />
          </div>
        </div>
      </div>
      <div className={`${!isLoaded ? "hidden" : "visible"}`}>
        <img
          alt={""}
          ref={imageRef}
          width={image.data.attributes.width}
          height={image.data.attributes.height}
          onLoad={changeLoad}
          load-src={url}
          draggable={false}
          className="rounded-lg hover:shadow-md transition-all duration-300 ease-out shadow-lg shadow-black/20 border-[3px] border-black/20"
        />
      </div>
    </div>
  );
};

export default ImageContent;