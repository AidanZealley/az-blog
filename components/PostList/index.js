import { Container } from '@components/Container'
import { PostTile } from '@components/PostTile'
import styles from './styles.module.css'

export const PostList = ({ posts }) => {
  return (
    <div className={styles.postList}>
      <Container>
        <div className={styles.inner}>
          {posts.map(({ sys, slug, title, coverImage, tags }) => (
            <PostTile
              key={sys.id}
              slug={slug}
              title={title}
              coverImage={coverImage}
              tags={tags}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}