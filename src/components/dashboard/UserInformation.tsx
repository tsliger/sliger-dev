import React, { useEffect, useState } from 'react'
import ky from "ky"
import { useStore } from '@nanostores/react';
import { jwtToken } from '../../stores/jwtStore';

export default function UserInformation() {
  const $token = useStore(jwtToken)
  const [data, setData] = useState(undefined)

  const fetchData = async () => {
    console.log($token)

    const url = import.meta.env.PUBLIC_BACKEND_URL
    const data: any= await ky.get(`${url}/api/users/me`, {
      headers: {
        'Authorization': `Bearer ${$token}`
      }
    }).json()

    setData(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (data) {
    return (
      <div className="py-8 text-white">
        <p>{data.username}</p>
        <p>{data.email}</p>
      </div>
    )
  }
}
