import { useState } from "react";
import { motion } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri";
import BlogDropdown from "./navbar/BlogDropdown";

export default function Navbar() {
  const [blogOpen, setBlogOpen] = useState(false);
  return (
    <nav className={`${!blogOpen ? "overflow-hidden" : ""} select-none h-20 z-50 absolute flex items-center px-8 lg:px-16 text-white w-full shadow-sm shadow-[#403D39]`}>
      <div className="h-16 lg:h-full aspect-square">
        <a
          draggable={false}
          className="h-full w-full grid place-items-center color-change-image"
          href={"/"}
        >
          <img
            draggable={false}
            className="invert select-none drop-shadow-xl "
            src="/sliger-warped-logo.svg"
            alt=""
          />
        </a>
      </div>
      <div className="w-full" />
      <div className="hidden lg:flex h-full text-sm md:text-base font-mono">
        <a draggable={false} href="/" className="nav-button">
          <p className="nav-child-button">
            Home
          </p>
        </a>
        <a draggable={false} href="/experience" className="nav-button">
          <p className={"nav-child-button"}>
            Experience
          </p>
        </a>
        <div className="nav-button" onClick={() => setBlogOpen(!blogOpen)}>
          <div className={`${blogOpen ? "nav-child-active" : ""} nav-child-button`}>
            <p>Blog</p>
            <motion.div animate={{ rotateZ: blogOpen ? -180 : 0 }} transition={{ duration: 0.25, ease: "easeOut" }}className="grid place-items-center h-full ml-2">
              <RiArrowDropDownLine size={17}/>
            </motion.div>
          </div>
          
          <BlogDropdown setBlogOpen={setBlogOpen} blogOpen={blogOpen}/>
        </div>
      </div>
    </nav>
  );
}
