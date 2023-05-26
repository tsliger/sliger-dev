import { useState, useRef } from 'react'
import Tilt from 'react-parallax-tilt';


export default function ExperienceCard() {
  const [isHovering, setHovering] = useState(false)

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <div className="w-[440px] h-[250px] experience-card cursor-pointer">

        </div>
    </Tilt>
  )
}
