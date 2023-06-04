import React, { useEffect } from 'react'
import { useStore } from "@nanostores/react";
import { jwtToken } from "../stores/jwtStore";
import ky from "ky"

export default function GithubAuthenticator() {
  const $jwtToken = useStore(jwtToken);

  const processCode = async (code) => {
    const data: any = await ky.post('http://localhost:1337/api/github-codes', { json: {data: { code: code }} }).json()

    if  (data.data.attributes) {
      const resp = data.data.attributes;
      
      if (resp.success && resp.token) {
        jwtToken.set(resp.token);
      }
    }
  }

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    const code = queryParameters.get("code")

    processCode(code)
  })
}
