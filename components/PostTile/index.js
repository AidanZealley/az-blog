import Link from 'next/link'
import { Hero } from '@components/Hero'
import { TagLinks } from '@components/TagLinks'
import { Button } from '@components/Button'
import styles from './styles.module.css'

export const PostTile = ({ slug, title, coverImage, tags }) => {
  return (
    <div className={`${styles.postTile}`}>
      <div className={styles.imageContainer}>
        <Hero image={coverImage?.url} alt={coverImage?.description} href={`/blog/${slug}`}/>
      </div>

      <div className={styles.content}>
        {tags
          ? <div className={styles.tagsWrap}>
              <TagLinks tags={tags}/>
            </div>
          : ''
        }

        <div className={styles.summary}>
          <h2 className={styles.summaryHeading}>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>

          <Button href={`/blog/${slug}`}>Read Post</Button>
        </div>
      </div>
    </div>
  )
}