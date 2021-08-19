import { Container } from '@components/Container';
import { Nav } from '@components/Nav';
import { Logo } from '@components/Logo';
import styles from './styles.module.css';

export const Header = ({ navLinks }) => {
  return (
    <div className={`${styles.header} glass`}>
      <Container className="flex">
        <Logo/>

        <div className={styles.navWrap}>
          <Nav navLinks={navLinks}/>
        </div>
      </Container>
    </div>
  );
}