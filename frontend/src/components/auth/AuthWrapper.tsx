import React from 'react'
import { useJwt } from "react-jwt";
import { useStore } from '@nanostores/react';
import { jwtToken } from '../../stores/jwtStore';

export default function AuthWrapper({children}) {
  const $token = useStore(jwtToken);
  const { isExpired } = useJwt($token);
  
  if ($token && !isExpired) {
    return (
      <>{children}</>
    )
  } else {
    window.location.href = "/login"
  }
}
