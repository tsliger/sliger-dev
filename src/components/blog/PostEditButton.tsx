import React from 'react'
import { BsThreeDots } from 'react-icons/bs/index'
import PostDropdown from './PostDropdown'

export default function PostEditButton({ onClick, isDropdownOpen, postId, setDropOpen }) {
  return (
    <>
      <div className={`${!isDropdownOpen ? "overflow-hidden" : ""} absolute h-6 w-6 top-0 right-0 rounded-bl-xl bg-black/40 shadow-md grid place-items-center`}>
        <button onClick={onClick} className="hover:text-[#ff6000] transition-colors duration-200 ease-in-out">
            <BsThreeDots size={12} />
        </button>
      </div>
      <PostDropdown {...{isDropdownOpen, postId, setDropOpen}} />
    </>
    
  )
}
