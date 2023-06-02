import React from 'react'
import readingTime from "reading-time"
import { BiTimer } from "react-icons/bi"
 
export default function ReadingTime({ content }) {
  const stats = readingTime(content.attributes.content);
  return (
    <div className="flex items-center select-none">
      <BiTimer />
      <div className="ml-1 font-mono  text-sm">{stats.text}</div>
    </div>
  )
}
