import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import styles from './styles.module.css'

export const Layout = ({ navLinks, children }) => {
  return (
    <div className={styles.layout}>
      <Header navLinks={navLinks}/>

      <main className={styles.main}>
        {children}
      </main>

      <Footer/>
    </div>
  )
}