import { format } from 'date-fns'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded'
import { Container } from '@components/Container'
import { TagLinks } from '@components/TagLinks'
import { Hero } from '@components/Hero'
import styles from './styles.module.css'

export const PostHeader = ({ date, title, coverImage, tags, demoLink }) => {
  return (
    <div className={styles.header}>
      <Container size="content">
        <div className={styles.summary}>
          {tags
            ? <TagLinks tags={tags}/>
            : ''
          }

          <h1 className={styles.summaryHeading}>{title}</h1>

          {/* <p>{format(new Date(date), 'E do MMM')}</p> */}
          
          {demoLink
            ? <a className={styles.sticker} href={demoLink} target="_blank">
                <span className={styles.stickerText}>
                  Check It Out
                </span>
                <span className={styles.stickerIconWrap}>
                  <span className={styles.stickerIcon}>
                    <PlayArrowRoundedIcon fontSize="small"/>
                  </span>
                </span>
              </a>
            : ''
          }
        </div>
      </Container>
      
      <Container>
        <div className={styles.imageContainer}>
          <Hero image={coverImage?.url} alt={coverImage?.description}/>
        </div>
      </Container>
    </div>
  )
}