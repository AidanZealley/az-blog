import GitHubIcon from '@material-ui/icons/GitHub'
import { Container } from '@components/Container'
import { Logo } from '@components/Logo'
import styles from './styles.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.bottomRow}>
          <Logo/>

          <div className={styles.contact}>
            <p>aidan@zealley.com</p>

            <GitHubIcon/>
          </div>
        </div>
      </Container>
    </div>
  )
}