import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

const Component = ({ image, alt }) => {
  return (
    <div className={styles.hero}>
      <Image
        layout="fill"
        src={image}
        alt={alt}
      />
    </div>
  )
}

export const Hero = ({ image, alt, href }) => {
  return (
    href ? (
      <Link href={href}>
        <a href={href} className={styles.heroLink}>
          <Component image={image} alt={alt}/>
        </a>
      </Link>
    ) : (
      <Component image={image} alt={alt}/>
    )
  );
}