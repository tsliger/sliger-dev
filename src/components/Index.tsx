import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Parallax from './Parallax';
import { Box } from './Box';

export default function Index() {
  const paragraphRef = useRef(null)
  const isInView = useInView(paragraphRef)
  return (
    <div className="min-h-screen relative">
      <div className="flex justify-center min-h-screen  h-[1000px] lg:h-[1100px] pb-28 md:pb-0 pt-20 select-none overflow-hidden">
        <div className="w-full flex justify-center relative">
          <div className="overflow-hidden absolute top-12 lg:top-auto" >
            <Parallax offset={200}>
              <div className="w-[700px] h-[700px] lg:w-[900px] lg:h-[900px]">
                <motion.img animate={{ opacity: 0.3 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: 0.25 }}  className="origin-center" draggable="false" src="/homepage-img.webp" />
              </div>
            </Parallax>
          </div>
          <div className='absolute -translate-y-40 lg:-translate-y-32'>
            <Parallax offset={650}>
              <motion.h1 animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} transition={{ duration: 1, delay: 0.4 }}  className="text-lg lg:text-2xl font-bold mb-6 font-mono text-[#FF6000] mx-12 md:mx-0  bg-black/10 w-48 rounded-md px-4 py-2 backdrop-blur-sm shadow-xl">Hi, I'm Tom</motion.h1>
              <motion.p animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 1.5, delay: 0.75 }} ref={paragraphRef} className="font-thin tarcking-widest font-serif mx-12 md:mx-0 md:w-[600px] lg:w-[700px] text-white leading-6 md:leading-10 z-50 text-sm md:text-base lg:text-xl ">
                  I am a highly skilled and experienced software engineer, passionate about
                  developing elegant solutions to challenging problems. With a solid
                  background in computer science and a keen eye for detail, I bring a depth of
                  knowledge to each project I undertake. Whether it's building a scalable web
                  application or designing a machine learning algorithm, I am dedicated to
                  creating software that not only meets but exceeds client expectations.
              </motion.p>
            </Parallax>
          </div>
        </div>
      </div>
      <div className="flex z-50 space-x-4 relative mx-auto w-full md:w-96 -translate-y-56 justify-center">
        <Parallax offset={150} >
          <Box>
            <div className="flex space-x-4">
              <a href="/experience" className="text-[#FFE6C7]  p-4 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">Experience / CV</a>
              <a href="/blog" className="text-[#FFE6C7]  p-4 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">View Posts...</a>
            </div>
          </Box>
        </Parallax>
      </div>
    </div>
  )
}
