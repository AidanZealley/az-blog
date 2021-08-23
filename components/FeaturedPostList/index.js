import Link from 'next/link'
import Image from 'next/image'
import { TagLinks } from '@components/TagLinks'
import styles from './styles.module.css'

export const FeaturedPostList = ({ posts }) => {
  return (
    <div className={styles.list}>
      {posts.map(({ sys, coverImage, tags, slug, title}) => (
        <Link key={sys.id} href={`/blog/${slug}`}>
          <a href={`/blog/${slug}`} className={styles.post}>
            <div>
              <div className={styles.imageWrap}>
                {coverImage
                  ? <Image
                      width={300}
                      height={300}
                      src={coverImage.url}
                      alt={coverImage.description}
                      className={styles.image}
                      layout="responsive"
                    />
                  : ''
                }
              </div>
            </div>

            <div className={styles.summary}>
              {tags
                ? <TagLinks tags={tags}/>
                : ''
              }

              <h2 className={styles.heading}>{title}</h2>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}