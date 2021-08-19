import Image from 'next/image';
import styles from './styles.module.css';

export const Hero = ({ image, alt }) => {
  return (
    <div className={styles.hero}>
      {image
        ? <Image
            layout="fill"
            src={image}
            alt={alt}
          />
        : ''
      }
    </div>
  );
}