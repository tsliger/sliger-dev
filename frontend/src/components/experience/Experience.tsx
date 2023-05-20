import { useRef } from "react";
import ScrollBar from "../ScrollBar";


export default function Experience() {
  return (
    <>
      <ScrollBar />
      <div className="snap-start h-screen snap-always">1</div>
      <div className="snap-start h-screen snap-always">2</div>
      <div className="snap-start h-screen snap-always">3</div>
    </>
  )
}
