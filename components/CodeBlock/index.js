import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from './styles.module.css'

export const CodeBlock = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')

    return !inline && match ? (
      <div className={styles.code}>
        <SyntaxHighlighter 
          style={dracula}
          language={match[1]}
          showLineNumbers={true}
          PreTag="div" {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code {...props}>
        {children}
      </code>
    )
  }
}