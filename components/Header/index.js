import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Container } from '@components/Container'
import { Nav } from '@components/Nav'
import { Logo } from '@components/Logo'
import styles from './styles.module.css'

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useRef()

  useEffect(()=>{
    const cachedRef = headerRef.current;

    const observer = new IntersectionObserver(
      ([e]) => setIsSticky(e.intersectionRatio < 1),
      {
        rootMargin: '-1px 0px 0px 0px',
        threshold: [1],
      }
    )

    observer.observe(cachedRef)
    
    // unmount
    return function(){
      observer.unobserve(cachedRef)
    }
  }, [])

  return (
    <div ref={headerRef} className={`${styles.header}${isSticky ? ` ${styles.sticky}` : ''} glass`}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.navWrap}>
            <Nav/>
          </div>

          <div className={styles.logoWrap}>
            <Logo/>
          </div>

          <div className={styles.social}>
            <a className={styles.iconLink} href="https://github.com/AidanZealley" target="_blank">
              <GitHubIcon/>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}