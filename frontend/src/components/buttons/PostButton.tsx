import React from 'react'
import  { LoadingCircle } from '../utils/Loading'

export default function PostButton({ isSubmitting }) {
  return (
    <button type="submit" className="text-[#FFE6C7] h-16 my-8  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl w-48 grid place-items-center mx-auto shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">
        {isSubmitting && <LoadingCircle />}
        {!isSubmitting && <p>Create Post</p> }
    </button>
  )
}
