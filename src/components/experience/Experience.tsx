import { useEffect, useState } from "react";
import { Box } from "../Box";
import { MdArrowDropDown } from 'react-icons/md/index'
import ky from "ky";
import ScrollBar from "../ScrollBar";
import Tilt from 'react-parallax-tilt';
import SkillTreeProvider from "./SkillTreeProvider";
import Parallax from "../Parallax";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "../ProjectCard";
import ContactForm from "../ContactForm";

export default function Experience() {
  const [projects, setProjects] = useState(undefined);

  const url = import.meta.env.PUBLIC_BACKEND_URL
  
  const fetchProjects = async () => {
    const data: any = await ky.get(`${url}/api/projects?populate=*`).json();

    if (data) {
      setProjects(data.data)
    }
  }
  
  useEffect(() => {
    fetchProjects();
  }, [])

  return (
    <>
      <ScrollBar />
      <Box>
        <div className="min-h-screen relative flex items-center justify-center  overflow-hidden">
          <Parallax offset={300}>
            <div className="min-h-screen flex flex-col justify-center items-center relative space-y-24 ">
              <div className="h-32 w-1/3 grid place-items-center">
                <h1 className="text-6xl text-white/50 drop-shadow-md font-serif tracking-widest select-none ">Experience</h1>
                <div className="flex font-mono space-x-12 my-10 ">
                  <a href="#projects" className="text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline">Projects</a>
                  <a href="#skills" className="text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline">Skills</a>
                  <a href="#contact" className="text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline">Contact</a>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-32 w-full">
                <ExperienceCard type="work"/>
                <ExperienceCard type="school"/>
              </div>
            </div>
          </Parallax>
          <div className="absolute bottom-0">
            <Parallax offset={-80}>
              <a href={'#projects'}>
                <button className="text-[#FFE6C7] z-[99] bottom-8 p-2 text-xs font-mono border-2 hover:animate-none   border-black/20 font-bold rounded-full animate-bounce shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">
                  <MdArrowDropDown size={25}/>
                </button>
              </a>
            </Parallax>
          </div>
        </div>
      </Box>
      <div className="main-container overflow-hidden">
        <div className='h-12' />
        <div id="projects" />
        <Box >
          <Parallax offset={300}>
            <div className="min-h-screen flex flex-col items-center justify-center  mx-8 lg:mx-16">
              <p className="self-start lg:translate-x-32 text-5xl  font-semibold tracking-widest font-serif text-gray-200 ">Projects</p>
              <p className="self-start lg:translate-x-32 pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20">Some things I've worked on</p>

              <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-16">
                {projects && projects.map((data, i) => {
                  return (
                    <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                      <ProjectCard {...{data}}/>
                    </Tilt>
                  )
                })}
              </div>
            </div>
          </Parallax>
        </Box>
        <Box id="skills">
          <Parallax offset={300}>
            <div className="min-h-screen flex flex-col justify-center items-center mx-8 lg:mx-16">
              <p className="self-start lg:translate-x-32 text-5xl  font-semibold tracking-widest font-serif text-gray-200">Skills</p>
              <p className="self-start lg:translate-x-32 pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20">What I've worked with professionally and personally</p>
              <div className="flex space-x-8">
                  <SkillTreeProvider />
              </div>
            </div>
          </Parallax>
        </Box>
        <Box id="contact">
          <Parallax offset={300}>
            <div className="min-h-screen flex flex-col items-center  mx-8 lg:mx-16">
              <p className="self-start lg:translate-x-32 text-5xl  font-semibold tracking-widest font-serif text-gray-200">Contact</p>
              <p className="self-start lg:translate-x-32 pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20">Feel free to reach out</p>
              <ContactForm />
            </div>
          </Parallax>
        </Box>
      </div>
    </>
  )
}
