import { AiFillGithub, AiFillLinkedin } from "react-icons/ai/index";

export default function Footer() {
  return (
    <footer className="snap-end select-none h-60 w-full bg-[#33312e] text-white relative">
      <div className="absolute bottom-[-12px] bg-[#33312e] h-8 w-full"></div>
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center">
        <div className="w-96 mx-auto flex justify-center pb-12 space-x-20">
          <div className="active:border-transparent shadow-black/20  border-transparent border-[1.5px]  hover:border-black/[5%] hover:text-[#FF6000] active:scale-95 active:shadow-none w-14 h-14 shadow-xl hover:shadow-md cursor-pointer transition-all duration-300 rounded-full">
            <a
              className="w-full h-full grid place-items-center"
              target="_blank"
              href={"https://www.linkedin.com/in/tom-sliger"}
              aria-label="Linkedin"
            >
              <AiFillLinkedin size={25} />
            </a>
          </div>
          <div className="shadow-black/20 active:border-transparent border-transparent border-[1.5px]  hover:border-black/[5%]  hover:text-[#FF6000] active:scale-95 active:shadow-none w-14 h-14 shadow-xl hover:shadow-md cursor-pointer transition-all duration-300 rounded-full grid place-items-center">
            <a
              className="w-full h-full grid place-items-center"
              target="_blank"
              href={"https://www.github.com/tsliger"}
              aria-label="Github"
            >
              <AiFillGithub size={25} />
            </a>
          </div>
        </div>
        <div className="w-10 mt-4 mx-auto ">
          <a draggable={false} href={"/"} aria-label="Home">
            <img
              draggable={false}
              className="select-none invert color-change-image active:invert"
              src="/sliger-warped-logo.svg"
              alt="">
            </img>
          </a>
        </div>
      </div>
      <svg
        className="absolute left-0 top-0 h-16 w-full -translate-y-[100%]"
        fill="#33312e"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
          className="shape-fill"
        ></path>
      </svg>
    </footer>
  );
}
