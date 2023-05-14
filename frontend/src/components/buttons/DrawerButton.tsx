import React from 'react'
import { HiMenuAlt4 } from "react-icons/hi"

export default function DrawerButton() {
  return (
    <div className="absolute right-0 top-0 h-20 aspect-square flex items-center justify-end pr-8 lg:pr-16 lg:hidden z-[99]">
        <button className="text-[#FFE6C7] p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">
            <HiMenuAlt4 size={20}/>
        </button>
    </div>
  )
}
