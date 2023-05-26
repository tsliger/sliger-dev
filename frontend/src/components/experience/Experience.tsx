import ScrollBar from "../ScrollBar";
import { Box } from "../Box";
import Tilt from 'react-parallax-tilt';
import SkillTreeProvider from "./SkillTreeProvider";
import Parallax from "../Parallax";
import { MdArrowDropDown } from 'react-icons/md'

export default function Experience() {
  return (
    <>
      <ScrollBar />
      <Box>
        <div className="min-h-screen relative flex items-center justify-center  overflow-hidden">
          <Parallax offset={300}>
            <div className="min-h-screen flex flex-col justify-center items-center relative space-y-24 ">
              <div className="h-32 w-1/3 grid place-items-center">
                <h1 className="text-6xl text-white/50 drop-shadow-md font-serif tracking-widest select-none">Experience</h1>
              </div>
              <div className="flex justify-center items-center space-x-32 w-full">
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <div className="w-[440px] h-[250px] experience-card cursor-pointer">

                  </div>
                </Tilt>
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <div className="w-[440px] h-[250px] experience-card cursor-pointer">

                  </div>
                </Tilt>
              </div>
            </div>
          </Parallax>
          <div className="absolute bottom-0">
            <Parallax offset={-80}>
              <button className="text-[#FFE6C7] z-[99] bottom-8 p-2 text-xs font-mono border-2 hover:animate-none   border-black/20 font-bold rounded-full animate-bounce shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">
                <MdArrowDropDown size={25}/>
              </button>
            </Parallax>
          </div>
        </div>
      </Box>
      <div className="main-container overflow-hidden">
        <div className='h-12' />
        <Box >
          <Parallax offset={300}>
            <div className="min-h-screen flex flex-col items-center justify-center  mx-16">
              <p className="self-start translate-x-32 text-5xl  font-semibold tracking-widest font-serif text-gray-200 mb-24">Projects</p>
              <div className="flex justify-center space-x-8">
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <div className="w-[340px] h-[400px] experience-card">

                  </div>
                </Tilt>
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <div className="w-[340px] h-[400px] experience-card">

                  </div>
                </Tilt>
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <div className="w-[340px] h-[400px] experience-card">

                  </div>
                </Tilt>
              </div>
            </div>
          </Parallax>
        </Box>
          <Box >
            <Parallax offset={300}>
              <div className="min-h-screen flex flex-col justify-center items-center mx-16">
                <p className="self-start translate-x-32 text-5xl  font-semibold tracking-widest font-serif text-gray-200">Skills</p>
                <p className="self-start translate-x-32 pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20">What I've worked with professionally and personally</p>
                <div className="flex space-x-8">
                    <SkillTreeProvider />
                </div>
              </div>
            </Parallax>
          </Box>
          <Box >
            <Parallax offset={300}>
              <div className="min-h-screen flex flex-col items-center  mx-16">
                <p className="self-start translate-x-32 text-5xl  font-semibold tracking-widest font-serif text-gray-200">Contact</p>
              </div>
            </Parallax>
          </Box>
      </div>
    </>
  )
}
