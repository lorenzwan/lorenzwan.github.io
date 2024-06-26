import React from 'react'
import styles from './rsp-frame.module.css'

export function VimeoIFrame({ id }) {
  const link = "https://player.vimeo.com/video/__id__?byline=0"

  return (
    <div className={styles.videoContainer}>
      <iframe className={styles.frame} src={link.replace("__id__", id)} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export function PdfIFrame({ path }) {
  return (
    <div className={styles.pdfContainer}>
      <iframe className={styles.frame} src={path} frameBorder="0"></iframe>
    </div>
  )
}