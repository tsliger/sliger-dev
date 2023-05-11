import React from 'react'

export default function Navbar() {
  return (
    // bg-[#403D39]
    <nav className="h-20 bg-[#403D39] bg-gradient-to-b from-black/30 to-transparent to-50%  z-50 flex items-center px-16 text-white fixed w-full">
        <div className="h-full aspect-square grid place-items-center">
          <img draggable={false} className="invert select-none" src="/sliger-warped-logo.svg" alt=""/>
        </div>
        <div className="w-full" />
        <div className="h-full flex text-sm md:text-base">
            <a href="/" className="nav-button">Home</a>
            <a href="/blog" className="nav-button">Blog</a>
            <a href="/experience" className="nav-button">Experience</a>
        </div>
    </nav>
  )
}
