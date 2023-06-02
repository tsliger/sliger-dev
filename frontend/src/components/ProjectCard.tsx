import React, { useState } from 'react'
import { AiFillGithub } from "react-icons/ai"

export default function ProjectCard({ data }) {
  const [isHovering, setHover] = useState(false)
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="w-[340px] h-[400px] experience-card text-white flex flex-col overflow-hidden">
      <div className="h-48 relative space-y-2">
        <h1 className="text-2xl font-mono font-semibold  px-4 py-3 ">{ data.attributes.title}</h1>
        <img src={"http://localhost:1337" + data.attributes.banner_image.data.attributes.url} className="object-fit opacity-20 grayscale"/>
      </div>
      <p className="w-full h-24 backdrop-blur-md py-4 px-4 bg-opacity-20">
        { data.attributes.description } 
      </p>
      <div className="flex-grow" />
      <a className="button-style self-end hover:scale-105 w-24 mb-4 mx-4" target="_blank" rel="noopener noreferrer" href={ data.attributes.github_link }>
        <div className="flex items-center space-x-2">
          <AiFillGithub /> 
          <p>Github</p>
        </div>
      </a>
    </div>
  )
}
