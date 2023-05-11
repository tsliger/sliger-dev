import React, { useEffect, useState } from 'react'
import { useJwt } from "react-jwt";

export default function AuthWrapper({children}) {
  // const [token, setToken] = useState(undefined)\
  const token = localStorage.getItem('jwt-token')
  const { decodedToken, isExpired } = useJwt(token);

  if (token && !isExpired) {
    return (
      <>{children}</>
    )
  } else {
    window.location.href = "/login"
  }
}
