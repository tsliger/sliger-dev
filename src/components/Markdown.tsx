// Markdown.tsx
import ReactMarkdown from 'react-markdown';
import { Highlight, themes } from "prism-react-renderer"

const Markdown = ({ markdown }) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, children }) => {
            return <a className="underline text-[#ff6000]" target="_blank"  href={href}>{children}</a>
        },
        
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <Highlight
              theme={themes.okaidia}
              code={String(children).replace(/\n$/, "")}
              language={match[1]}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre style={style} className="px-4 pl-6 mt-6 mb-24 py-6 rounded-xl shadow-sm overflow-x-scroll">
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {/* <span  className="pr-6 select-none">{i + 1}</span> */}
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
      className="markdown text-md lg:text-base space-y-8"
    >
      {markdown}
    </ReactMarkdown>
  )
}

export default Markdown;
