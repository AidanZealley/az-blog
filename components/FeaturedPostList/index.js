import Link from 'next/link';
import Image from 'next/image';
import { TagLinks } from '@components/TagLinks';
import styles from './styles.module.css'

export const FeaturedPostList = ({ posts }) => {
  return (
    <div className={styles.list}>
      {posts.map(({ sys, coverImage, tags, slug, title}) => (
        <Link href={`/blog/${slug}`}>
          <a href={`/blog/${slug}`} key={sys.id} className={styles.post}>
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