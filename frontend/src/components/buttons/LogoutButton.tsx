import { useState } from 'react'
import  { LoadingCircle } from '../utils/Loading'
import { jwtToken } from '../../stores/jwtStore';

export default function LogoutButton() {
  const [loading, setLoading] = useState(false)

  const LogoutUser = () => {
    setLoading(true)
    jwtToken.set(undefined);

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
