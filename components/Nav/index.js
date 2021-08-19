import Link from 'next/link';
import { useRouter } from 'next/router';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';
import styles from './styles.module.css';

export const Nav = ({ navLinks }) => {
  const isSameSiteSection = (pathname, navUrl) => `/${pathname.split('/')[1]}` === navUrl

  const router = useRouter();

  return (
    <nav className={`${styles.nav}`}>
      {navLinks.map((navlink, index) => (
        <Link key={index} href={navlink.url}>
          <a className={`${styles.link}${isSameSiteSection(router.pathname, navlink.url) ? ` ${styles.active}` : ''}`}>{navlink.text}
            {
              navlink.external
              ? <OpenInNewRoundedIcon fontSize="small"/>
              : ''
            }
          </a>
        </Link>
      ))}
    </nav>
  );
}