import { Container } from '@components/Container';
import styles from './styles.module.css'

export const Intro = ({ children, variant }) => {
  return (
    <div className={`${styles.outer}${variant ? ` ${styles[variant]}` : ''}`}>
      <Container>
        {children}
      </Container>
    </div>
  )
}