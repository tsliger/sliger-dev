import Parallax from './Parallax'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';


export default function Index() {
  const paragraphRef = useRef(null)
  const isInView = useInView(paragraphRef)
  return (
    <div className="flex flex-col items-center h-screen justify-center pt-32 select-none">
      {/* <img className="h-[700px] absolute -translate-x-72 -translate-y-20 opacity-30" draggable="false" src="/index.png" /> */}
      <Parallax offset={150} className="absolute" >
        <img className="h-[700px]  -translate-x-72 -translate-y-20 opacity-30" draggable="false" src="/index.png" />
      </Parallax>

      <Parallax offset={70} className={"mb-32"}>
        <h1 className="text-2xl font-bold mb-4 font-mono text-[#FF6000] bg-black/10 w-48 rounded-md px-4 py-2 backdrop-blur-sm shadow-xl">Hi, I'm Tom</h1>
        <motion.p ref={paragraphRef} className="font-thin tarcking-widest font-serif w-[700px] text-white leading-8 z-50 text-xl ">
            I am a highly skilled and experienced software engineer, passionate about
            developing elegant solutions to challenging problems. With a solid
            background in computer science and a keen eye for detail, I bring a depth of
            knowledge to each project I undertake. Whether it's building a scalable web
            application or designing a machine learning algorithm, I am dedicated to
            creating software that not only meets but exceeds client expectations.
            Thanks for visiting my portfolio, and I look forward to the opportunity to
            work with you.
        </motion.p>
      </Parallax>
      <Parallax offset={40}>
        <div className="flex z-50 space-x-4">
          <button className="text-[#FFE6C7]  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">Resume</button>
          <button className="text-[#FFE6C7]  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">View Posts...</button>
        </div>
      </Parallax>
    </div>
  )
}
