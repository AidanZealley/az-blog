import Link from 'next/link';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import styles from './styles.module.css';

export const TagLinks = ({ tags }) => {
  return (
    <div className={styles.tags}>
      <LocalOfferRoundedIcon fontSize="small"/>

      <div className={styles.list}>
        {tags.map((tag, index) => (
          <Link key={index} href={`/posts/${tag}`}>
            <a className={styles.tag}>{tag}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}