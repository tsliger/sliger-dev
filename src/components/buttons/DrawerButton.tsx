import { useEffect, useState } from 'react'
import { HiMenuAlt4, HiX } from "react-icons/hi"
import { motion } from 'framer-motion';

function Drawer({isDrawerOpen}) {
  const variants = {
    visible: { opacity: 1, scaleY: 1, transition: {  ease: "easeIn", duration: 0.25 } },
    hidden: { opacity: 0, scaleY: 0.2,  transition: {  ease: "easeOut", duration: 0.15 }  },
  }

  return (
    <motion.div variants={variants} initial={'hidden'} animate={isDrawerOpen ? "visible" : "hidden"} className="origin-top absolute w-full h-[300px] rounded-b-2xl shadow-xl z-[99] top-20 bg-[#403D39] border-b-[3px] border-black/20">
      fdsaf
    </motion.div>
  )
}

export default function DrawerButton() {
  const [isDrawerOpen, setDrawer] = useState(false);

  useEffect(() => {

  }, [])

  const changeState = async() => {
    setDrawer(!isDrawerOpen)
  }

  return (
    <>
      <div className="absolute z-[500] right-0 top-0 h-20 aspect-square flex items-center justify-end pr-8 lg:pr-16 lg:hidden ">
          <motion.button onClick={changeState} className="text-[#FFE6C7] z-[500] p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">
              {!isDrawerOpen && <HiMenuAlt4 size={20}/> }
              {isDrawerOpen && <HiX size={20}/> }
          </motion.button>
      </div>
      <Drawer {...{isDrawerOpen}}/>
    </>
  )
}
