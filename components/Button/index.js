import { forwardRef } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

export const Button = forwardRef(({ href, size, color, children }, ref) => {
  const classList = `${styles.button}${size ? ` ${styles[size]}` : ''}${color ? ` ${styles[color]}` : ''}`

  return (
    href
      ? (
          <Link href={href} passHref>
            <a ref={ref} href="" className={classList}>
              {children}
            </a>
          </Link>
        )
      : (
          <button ref={ref} className={classList}>
            {children}
          </button>
        )

  )
})