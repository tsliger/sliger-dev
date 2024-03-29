import { Box } from "../Box";
import { MdArrowDropDown } from "react-icons/md/index";
import SkillTreeProvider from "./SkillTreeProvider";
import Parallax from "../Parallax";
import ExperienceCard from "./ExperienceCard";
import ContactForm from "../ContactForm";
import ProjectCardProvider from "./ProjectCardProvider";

export default function Experience() {
  return (
    <>
      <Box className="">
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
          <Parallax offset={200}>
            <div className="min-h-screen flex flex-col pt-40 lg:pt-0 lg:justify-center items-center relative space-y-8 lg:space-y-24 ">
              <div className="h-32 w-full grid place-items-center">
                <h1 className="text-5xl lg:text-6xl text-white/50 drop-shadow-md font-serif tracking-widest select-none ">
                  Experience
                </h1>
                <div className="flex font-mono space-x-12 my-10 text-sm lg:text-base ">
                  <a
                    href="#projects"
                    className="text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline"
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className="text-[#FF6000] transition-all duration-200 ease-in-out active:invert cursor-pointer hover:underline"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-32 w-full">
                <ExperienceCard type="work" />
                <ExperienceCard type="school" />
              </div>
            </div>
          </Parallax>
          <div className="absolute -bottom-12 invisible md:visible">
            <Parallax offset={-80}>
              <a aria-label="Scroll Down" href={"#projects"}>
                <div className="text-[#FFE6C7] z-[99] bottom-8 p-2 text-xs font-mono border-2 hover:animate-none   border-black/20 font-bold rounded-full animate-bounce shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">
                  <MdArrowDropDown size={22} />
                </div>
              </a>
            </Parallax>
          </div>
        </div>
      </Box>
      <div className="main-container overflow-hidden space-y-8">
        <div className="h-12" />
        <div id="projects" />
        <Box className="h-[700px]">
          <Parallax offset={200}>
            <div className="min-h-screen flex flex-col items-center justify-center  mx-8 lg:mx-16">
              <p className="self-start lg:translate-x-32 text-2xl lg:text-5xl  font-semibold tracking-widest font-serif text-gray-200 ">
                Projects
              </p>
              <p className="self-start text-sm lg:text-base lg:translate-x-32 pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20">
                Some things I've worked on
              </p>

              <ProjectCardProvider />
            </div>
          </Parallax>
        </Box>
        <Box id="skills">
          <Parallax offset={200}>
            <div className="min-h-screen flex flex-col justify-center items-center mx-8 lg:mx-16">
              <p className="self-start lg:translate-x-32 text-2xl lg:text-5xl  font-semibold tracking-widest font-serif text-gray-200">
                Skills
              </p>
              <p className="self-start text-sm lg:text-base lg:translate-x-32 pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20">
                What I've worked with professionally and personally
              </p>
              <div className="flex space-x-8">
                <SkillTreeProvider />
              </div>
            </div>
          </Parallax>
        </Box>
        <Box id="contact" className="h-[700px]">
          <Parallax offset={200}>
            <div className="min-h-screen flex flex-col items-center  mx-8 lg:mx-16">
              <p className="self-start lg:translate-x-32 text-2xl lg:text-5xl  font-semibold tracking-widest font-serif text-gray-200">
                Contact
              </p>
              <p className="self-start text-sm lg:text-base lg:translate-x-32 pb-12 lg:pb-24 mt-1 font-semibold tracking-widest font-mono text-gray-200/20">
                Feel free to reach out
              </p>
              <ContactForm />
            </div>
          </Parallax>
        </Box>
        <div className="h-64" />
      </div>
    </>
  );
}
