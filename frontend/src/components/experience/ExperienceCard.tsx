import { useState, useRef } from 'react'
import Tilt from 'react-parallax-tilt';


export default function ExperienceCard({ type=undefined }) {
  const [isHovering, setHovering] = useState(false)

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <div className="w-[440px] h-[250px] experience-card cursor-pointer">
          {type === "work" && (
            <Work />
          )}
          {type === "school" && (
            <School />
          )}
        </div>
    </Tilt>
  )
}

const Work = () => {
  return (
    <div className="w-full h-full flex flex-col px-6 space-y-2">
      <h1 className="font-bold text-lg tracking-wider text-white/70 py-2">Work Experience</h1>
      <div className='flex items-center '>
        <div className="opacity-50 rounded-lg overflow-hidden border-[3px] p-2 bg-white shadow-md border-black/10">
          <img className="h-10 w-10" src={'/work-logo.jpg'} />
        </div>
          
        <div className="pl-4">
          <h1 className="text-lg font-bold text-white/70 font-mono">Anchor Systems</h1>
          <p className="text-white/70 font-mono text-sm italic">Software Engineer</p>
          <p className="text-white/40 font-mono text-xs italic self-end">Feb 2022 - Mar 2023 (1 yr)</p>
        </div>
      </div>
    </div>
  )
}

const School = () => {
  return (
    <div className="w-full h-full flex flex-col px-6 space-y-2">
      <h1 className="font-bold text-lg tracking-wider text-white/70 py-2">Education</h1>
      <div className='flex items-center flex-row'>
        <div className="bg-white opacity-50  rounded-lg overflow-hidden border-[3px] p-2 shadow-md border-black/10">
          <img className="h-10 w-10" src={'/education-logo.jpg'} />
        </div>
        <div className="pl-4">
          <h1 className="text-lg font-bold text-white/70 font-mono">Lake Superior State Unviersity</h1>
          <p className="text-white/70 font-mono text-sm italic">BS, Computer Science</p>
          <p className="text-white/40 font-mono text-xs italic self-end">Aug 2018 - May 2022 (4 yrs)</p>
        </div>
      </div>
    </div>
  )
}
