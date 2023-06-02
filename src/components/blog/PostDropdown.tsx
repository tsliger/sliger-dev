import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion";
import { MdDelete, MdEdit } from "react-icons/md";
import PostDeleteModal from './PostDeleteModal';

export default function PostDropdown({ isDropdownOpen, postId, setDropOpen}) {
  const [isDeleteModalOpen, setDeleteModal] = useState(false)
  const dropRef = useRef(undefined);

  useEffect(() => {
    async function click(event) {
      if (dropRef.current.contains(event.target)) {
        setDropOpen(true)
      } else {
        setDropOpen(false)
      }
    }

    if (isDropdownOpen) {
      setTimeout(() => {
        document.body.addEventListener('click', click);
      }, 1)
    } else {
      setTimeout(() => {
        document.body.removeEventListener('click', click)
      }, 1)
    }

    return () => {
      setTimeout(() => {
        document.body.removeEventListener('click', click)
      }, 1)
    }
  }, [dropRef, isDropdownOpen, setDropOpen])

  const variants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: {  ease: "easeInOut", duration: 0.35 } },
    hidden: { opacity: 0, y: -10, scale: 0.95, transition: {  ease: "easeInOut", duration: 0.2 }  },
  }

  return (
    <>
      <motion.div ref={dropRef} variants={variants} initial="hidden" animate={isDropdownOpen ? "visible" : "hidden"} className={`text-xs absolute right-1 top-8 w-24 shadow-sm bg-[#403d39] border-[1.5px] border-black/20 rounded-md flex flex-col  overflow-hidden z-[60]`}>
          <button className="py-3 text-left px-2 flex items-center space-x-1 hover:text-[#ff6000] transition-all duration-150">
            <MdEdit /> <p>Edit Post</p>{" "}
          </button>
          <button onClick={() => {setDeleteModal(true); setDropOpen(false)}} className="py-3 text-left px-2 flex items-center space-x-1 hover:text-[#ff6000] transition-all duration-150">
            <MdDelete /> <p> Delete</p>{" "}
          </button>
      </motion.div>
      {isDeleteModalOpen && 
        <PostDeleteModal {...{isDeleteModalOpen, setDeleteModal, postId}}/>
      }
    </>
  )
}
