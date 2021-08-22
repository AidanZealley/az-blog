import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from './styles.module.css'

export const CodeBlock = ({ code, language }) => {
  return (
    <SyntaxHighlighter 
      style={dracula}
      language={language}
      showLineNumbers={true}
      PreTag="div"
      className={styles.code}
    >
      {String(code).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}