import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Markdown({content}) {
  return (
    <ReactMarkdown className="space-y-8 text-sm lg:text-base">{content.attributes.content}</ReactMarkdown>
  )
}
