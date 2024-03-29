import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiArrowDropDownLine } from "react-icons/ri/index";
import BlogDropdown from "./navbar/BlogDropdown";

export default function Navbar() {
  const [blogOpen, setBlogOpen] = useState(false);

  const [currentTab, setTab] = useState("");

  useEffect(() => {
    var parser = document.createElement("a");
    parser.href = window.location.href;

    const regex = new RegExp(/[A-Za-z]+/);

    const match = parser.pathname.match(regex);
    if (match && match[0]) {
      setTab(match[0]);
    } else {
      setTab(null);
    }
  }, []);

  return (
    <nav
      className={`${
        !blogOpen ? "overflow-hidden" : ""
      } bg-[#403D39] select-none h-20 z-[300] snap-start absolute flex items-center  px-8 lg:px-0 w-full lg:w-[800px] xl:w-[1200px] self-center text-white  shadow-sm shadow-[#403D39]`}
    >
      <div className="h-12 lg:h-16 aspect-square duration-[1000ms]">
        <a
          draggable={false}
          className="h-full w-full grid place-items-center color-change-image"
          href={"/"}
          aria-label="Home"
        >
          <img
            draggable={false}
            className="invert select-none drop-shadow-xl "
            src="/sliger-warped-logo.svg"
            alt=""
          >
          </img>
        </a>
      </div>
      <div className="w-full" />
      <div className="hidden lg:flex h-full text-sm md:text-base font-mono translate-x-8">
        <a draggable={false} href="/" className="nav-button">
          <div
            className={`${
              currentTab === null ? "nav-child-active" : ""
            } nav-child-button`}
          >
            Home
          </div>
        </a>
        <a draggable={false} href="/experience" className="nav-button">
          <div
            className={`${
              currentTab === "experience" ? "nav-child-active" : ""
            } nav-child-button`}
          >
            Experience
          </div>
        </a>
        <div className="nav-button" onClick={() => setBlogOpen(!blogOpen)}>
          <div
            className={`${
              blogOpen || currentTab === "blog" ? "nav-child-active" : ""
            } nav-child-button`}
          >
            <p>Blog</p>
            <motion.div
              animate={{ rotateZ: blogOpen ? -180 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid place-items-center h-full ml-2"
            >
              <RiArrowDropDownLine size={17} />
            </motion.div>
          </div>

          <BlogDropdown {...{ setBlogOpen, blogOpen }} />
        </div>
      </div>
    </nav>
  );
}
