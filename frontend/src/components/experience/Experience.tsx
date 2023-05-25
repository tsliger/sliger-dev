import ScrollBar from "../ScrollBar";
import { Box } from "../Box";
import Tilt from 'react-parallax-tilt';
import SkillTreeProvider from "./SkillTreeProvider";

export default function Experience() {
  return (
    <>
      <ScrollBar />
      <div className="h-screen">
        
      </div>

      <Box className={'w-full h-screen flex items-center justify-center bg-emerald-500'}> 
        <Tilt tiltMaxAngleX={0} tiltMaxAngleY={8} tiltReverse>
          <div className="w-96 h-96 bg-red-500">dafjlksdflk</div>
        </Tilt>
      </Box>
      <div className="min-h-screen flex flex-col items-center mx-16">
        <p className="self-start left-16 relative text-5xl py-24 font-semibold tracking-widest font-serif text-gray-200">Skills</p>
        {/* <Box > */}
          <div className="flex space-x-8">
            <SkillTreeProvider />
          </div>
        {/* </Box> */}
      </div>
    </>
  )
}
