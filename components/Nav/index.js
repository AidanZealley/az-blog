import Link from 'next/link'
import { useRouter } from 'next/router'
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded'
import { config } from '@utils/config'
import styles from './styles.module.css'

export const Nav = () => {
  const { navLinks } = config

  const isSameSiteSection = (path, configUrl) => `/${path.split('/')[1]}` === configUrl

  const { pathname } = useRouter()

  return (
    <nav className={`${styles.nav}`}>
      {navLinks.map(({ label, url, external }, index) => (
        <Link key={index} href={url}>
          <a
            className={`
              ${styles.link}
              ${isSameSiteSection(pathname, url) ? ` ${styles.active}` : ''}
            `}
            target={external ? '_blank' : ''}
          >
            {label}
            {
              external
              ? <OpenInNewRoundedIcon fontSize="small"/>
              : ''
            }
          </a>
        </Link>
      ))}
    </nav>
  )
}