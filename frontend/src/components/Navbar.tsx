import React from 'react'

export default function Navbar() {
  return (
    <nav className="h-20 bg-[#403D39] z-50 flex items-center px-4 text-white fixed w-full">
        <div className="h-full aspect-square">

        </div>
        <div className="w-full" />
        <div className="h-full flex text-sm md:text-base">
            <a href="/" className="nav-button">Home</a>
            <a href="/posts/" className="nav-button">Posts</a>
            <a href="/experience/" className="nav-button">Experience</a>
        </div>
    </nav>
  )
}
