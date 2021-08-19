import { Container } from '@components/Container';
import { Logo } from '@components/Logo';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className="flex align-center">
        <Logo/>
      </Container>
    </div>
  );
}