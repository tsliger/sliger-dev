import { useState } from 'react'
import Tilt from 'react-parallax-tilt';


export default function ExperienceCard({ type=undefined }) {
  const [isActive, setActive] = useState(false)

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className="w-[440px] h-[250px] experience-card cursor-pointer">
          {type === "work" && (
            <Work {...{isActive}}/>
          )}
          {type === "school" && (
            <School {...{isActive}}/>
          )}
        </div>
    </Tilt>
  )
}

const Work = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col px-6 space-y-2">
      <h1 className="font-bold text-lg tracking-wider text-white/70 py-2">Work Experience</h1>
      <div className='flex items-center '>
        <div className={`${isActive ? "opacity-80" : "opacity-50"} transition-all duration-300 ease-in-out rounded-lg overflow-hidden border-[3px] p-2 bg-white shadow-md border-black/10`}>
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

const School = ({ isActive }) => {
  return (
    <div className="w-full h-full flex flex-col px-6 space-y-2">
      <h1 className="font-bold text-lg tracking-wider text-white/70 py-2">Education</h1>
      <div className='flex items-center flex-row'>
        <div className={`${isActive ? "opacity-80" : "opacity-50"} bg-white transition-all duration-300 ease-in-out rounded-lg overflow-hidden border-[3px] p-2 shadow-md border-black/10`}>
          <img className="h-10 w-10" src={'/education-logo.jpg'} />
        </div>
        <div className="pl-4">
          <h1 className="text-lg font-bold text-white/70 font-mono">Lake Superior State University</h1>
          <p className="text-white/70 font-mono text-sm italic">BS, Computer Science</p>
          <p className="text-white/40 font-mono text-xs italic self-end">Aug 2018 - May 2022 (4 yrs)</p>
        </div>
      </div>
    </div>
  )
}
