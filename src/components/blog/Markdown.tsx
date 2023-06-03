import ReactMarkdown from 'react-markdown'

export default function Markdown({content}) {
  return (
    <ReactMarkdown className="space-y-10 leading-8 text-justify indent-8">{content.attributes.content}</ReactMarkdown>
  )
}
