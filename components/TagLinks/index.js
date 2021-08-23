import Link from 'next/link'
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded'
import styles from './styles.module.css'

export const TagLinks = ({ tags }) => {
  return (
    <div className={styles.tags}>
      <LocalOfferRoundedIcon fontSize="small"/>

      <div className={styles.list}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}