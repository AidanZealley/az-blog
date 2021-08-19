import { Container } from '@components/Container';
import { TagLinks } from '@components/TagLinks';
import { Hero } from '@components/Hero';
import styles from './styles.module.css';

export const PostHeader = ({ title, coverImage, tags }) => {
  return (
    <div className={styles.header}>
      <Container size="content">
        <div className={styles.summary}>
          {tags
            ? <TagLinks tags={tags}/>
            : ''
          }

          <h1 className={styles.summaryHeading}>{title}</h1>
        </div>
      </Container>
      
      <Container>
        <div className={styles.imageContainer}>
          <Hero image={coverImage.url} alt={coverImage.description}/>
        </div>
      </Container>
    </div>
  );
}