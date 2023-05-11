import React, { useState, useRef, useEffect } from 'react'
import axios from "axios"
import { useJwt } from "react-jwt";
import { LoadingCircle } from './Loading';

export default function LoginComponent() {
  const [formData, setData] = useState({
    "identifier": undefined,
    "password": undefined
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const formRef = useRef(null)

  const token = localStorage.getItem('jwt-token');

  const { decodedToken, isExpired } = useJwt(token);

  if (token && !isExpired) {
    setTimeout(() => {
      return window.location.href = "/dashboard";
    }, 300)
  }

  const LoginUser = (e) => {
    setLoading(true)
    axios.post('http://localhost:1337/api/auth/local', formData).then((data) => {
      localStorage.setItem('jwt-token', data.data.jwt)
      setTimeout(() => {
        setLoading(false)
        window.location.href = "/dashboard";
      }, 1000)
    }).catch((e) => {
      setError("Could not validate credentials")
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    })

    formRef.current.reset();
  }
  
  return (
    <div className="bg-gradient-to-bl shadow-xl hover:shadow-lg duration-300 transition from-[#FFFFFF]/20 from-10%  to-black/20 rounded-lg w-96 h-96 py-8 relative">
        <form ref={formRef} onSubmit={(event) => event.preventDefault()} className="space-y-8 flex items-center flex-col">
            <img draggable={false} className="select-none invert w-32 absolute top-8" src="/sliger-warped-logo.svg" alt=""/>
            <span className="text-red-500 text-sm h-2 translate-y-8">{error}</span>
            <div className="h-1" />
            <input type="email" onChange={(e) => setData({...formData, identifier: e.currentTarget.value})} className="bg-transparent decorations-none h-10 !outline-none placeholder:text-white/20 border-2 px-4 rounded-lg shadow-lg focus:border-[#FFE6C7] focus:shadow-none border-white/20 w-[330px] text-white font-mono" placeholder="Email" />
            <input onChange={(e) => setData({...formData, password: e.currentTarget.value})} className="bg-transparent decorations-none h-10 !outline-none placeholder:text-white/20 border-2 px-4 rounded-lg shadow-lg focus:border-[#FFE6C7] focus:shadow-none border-white/20 w-[330px] text-white font-mono" placeholder="Password" type="password"/>
            <button onClick={LoginUser}  className="text-[#FFE6C7]  p-3 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center">
              {loading && <LoadingCircle />}
              {!loading && <p>Log in</p> }
            </button>
        </form>
    </div>
  )
}
