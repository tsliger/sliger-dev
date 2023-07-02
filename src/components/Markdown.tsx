// Markdown.tsx
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Markdown = ({ markdown }) => {
  const syntaxTheme = materialDark;

  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              className="rounded-xl shadow-sm"
              language={match[1]}
              style={syntaxTheme}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
      className="markdown break-all"
    >
      {markdown}
    </ReactMarkdown>
  )
}

export default Markdown;
