import ReactMarkdown from "react-markdown";
import { CodeBlock } from '@components/CodeBlock';
import styles from './styles.module.css';

export const PostBody = ({ body }) => {
  return (
    <div className={styles.body}>
      <ReactMarkdown components={CodeBlock}>{body}</ReactMarkdown>
    </div>
  );
};