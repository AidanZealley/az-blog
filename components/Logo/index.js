import Link from 'next/link'
import styles from './styles.module.css'

export const Logo = () => {
  return (
    <Link href="/">
      <a className={`${styles.logo}`}>az.</a>
    </Link>
  )
}