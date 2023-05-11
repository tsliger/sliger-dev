import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function UserInformation() {
  const token = localStorage.getItem('jwt-token')
  const [data, setData] = useState(undefined)

  useEffect(() => {
    axios.get('http://localhost:1337/api/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setData(response.data); // user data
    })
    .catch(error => {
      
    });
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
