import ReactMarkdown from "react-markdown";
import { Container } from '@components/Container';
import { CodeBlock } from '@components/CodeBlock';
import styles from './styles.module.css';

export const PostBody = ({ body }) => {
  return (
    <Container size="content">
      <div className={styles.body}>
        <ReactMarkdown components={CodeBlock}>{body}</ReactMarkdown>
      </div>
    </Container>
  );
};