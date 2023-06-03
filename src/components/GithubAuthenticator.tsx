import React, { useEffect } from 'react'

export default function GithubAuthenticator() {
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const code = queryParameters.get("code")

    console.log(code)
  })

  return (
    <div>GithubAuthenticator</div>
  )
}
