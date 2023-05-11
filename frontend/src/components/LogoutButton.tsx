import React, { useState, useRef, useEffect } from 'react'
import  { LoadingCircle } from '../components/Loading'

export default function LogoutButton() {
  const [loading, setLoading] = useState(false)

  const LogoutUser = () => {
    setLoading(true)
    localStorage.removeItem('jwt-token')

    setInterval(() => {
      setLoading(false)

      window.location.href = "/login"
    }, 200)
  }

  return (
    <button onClick={LogoutUser}  className="text-[#FFE6C7]  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">
        {loading && <LoadingCircle />}
        {!loading && <p>Log out</p> }
    </button>
  )
}
