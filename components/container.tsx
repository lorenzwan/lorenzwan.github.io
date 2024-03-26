import React from 'react'
import styles from './container.module.css'

export function ResponsiveIFrame({ link }) {
  return (
    <div className={styles.container}>
      <iframe className={styles.frame} src={link}></iframe>
    </div>
  )
}