import ScrollBar from "../ScrollBar";
import { Box } from "../Box";
import Tilt from 'react-parallax-tilt';


export default function Experience() {
  return (
    <>
      <ScrollBar />
      <div className="h-screen">
        
      </div>

      <Box className={'w-full h-screen flex items-center justify-center bg-emerald-500'}> 
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
          <div className="w-96 h-96 bg-red-500">dafjlksdflk</div>
        </Tilt>
      </Box>
      <div className="h-screen grid place-items-center">
        {/* <Box /> */}
      </div>
      <div className="h-screen grid place-items-center">
        {/* <Box /> */}
        asdfadsf
      </div>

      {/* <div className="snap-start h-screen snap-always">1</div>
      <div className="snap-start h-screen snap-always">2</div>
      <div className="snap-start h-screen snap-always">3</div> */}
    </>
  )
}
