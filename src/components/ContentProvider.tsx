import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'


const TextContent = ({ text }) => {
  return (
    <ReactMarkdown className="space-y-10 leading-8 text-justify indent-8">{text}</ReactMarkdown>
  )
}

const HeaderContent = ({ text }) => {
  return (
    <h1 className="font-sans text-3xl font-bold mb-2">
      { text }
    </h1>
  )
}

const ImageContent = ({ image }) => {
  const url = image.data.attributes.url;
  return (
    <div className="py-8">
      <img src={url} draggable={false}/>
    </div>
  )
}

export default function ContentProvider({ contents }) {
  const [content, setContent] = useState(undefined)
  useEffect(() => {
    var sorted_content = contents.sort(function(a, b) {
      return a.attributes.order > b.attributes.order ;
    });

    setContent(sorted_content)
  }, [])

  return (
    <div>
      {content && content.map((data, i) => {
        return (
          <div key={data.id}>
            {data && data.attributes && data.attributes.type === "text"  && (
              <TextContent text={data.attributes.content}/>
            )}
            {data && data.attributes && data.attributes.type === "header"  && (
              <HeaderContent text={data.attributes.header}/>
            )}
            {data && data.attributes && data.attributes.type === "image"  && (
              <ImageContent image={data.attributes.image}/>
            )}
          </div>
        )
      })}
    </div>
  )
}
