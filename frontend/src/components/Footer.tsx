import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

export default function Footer() {
  return (
    <footer className="snap-end select-none h-60 w-full bg-[#FFE6C7] relative">
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center">
        <div className="w-96 mx-auto flex justify-center pb-12 space-x-20">
          <div className="active:border-transparent border-transparent border-[1.5px]  hover:border-black/[5%] hover:text-[#FF6000] active:scale-95 active:shadow-none w-14 h-14 shadow-xl hover:shadow-md cursor-pointer transition-all duration-100 rounded-full">
            <a className="w-full h-full grid place-items-center" target="_blank" href={'https://www.linkedin.com/in/tom-sliger'}>
              <AiFillLinkedin size={25}/>
            </a>
          </div>
          <div className="active:border-transparent border-transparent border-[1.5px]  hover:border-black/[5%]  hover:text-[#FF6000] active:scale-95 active:shadow-none w-14 h-14 shadow-xl hover:shadow-md cursor-pointer transition-all duration-100 rounded-full grid place-items-center">
            <a className="w-full h-full grid place-items-center" target="_blank" href={'https://www.github.com/tsliger'}>
              <AiFillGithub size={25}/>
            </a>
          </div>
        </div>
        <div className="w-10 mt-4 mx-auto active:scale-90 transition-all duration-200 ease-in">
          <a draggable={false}  href={'/'}>
            <img draggable={false} className="select-none" src="/sliger-warped-logo.svg" alt=""/>
          </a>
        </div>
      </div>
    <svg className="absolute left-0 top-0 h-16 w-full -translate-y-[99%]"  fill="#FFE6C7" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
    </svg>
    </footer>
  )
}
