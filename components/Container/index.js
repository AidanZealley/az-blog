import styles from './styles.module.css'

export const Container = ({ size, className, children }) => {
  return (
    <div className={`${styles.container}${size ? ` ${styles[size]}` : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}