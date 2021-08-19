import { forwardRef } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

export const Button = forwardRef(({ href, size, children }, ref) => {
  return (
    href
      ? (
          <Link href={href} passHref>
            <a ref={ref} href="" className={`${styles.button}${size ? ` ${styles[size]}` : ''}`}>
              {children}
            </a>
          </Link>
        )
      : (
          <button ref={ref} className={`${styles.button}${size ? ` ${styles[size]}` : ''}`}>
            {children}
          </button>
        )

  )
})