"use client"
import React from 'react'
import styles from './infoApi.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src="/image/logo.png" alt="Logo" width={200} height={200} />
        <li className={styles.menuItem}>Personagens</li>
        <li className={styles.menuItem}>Detalhes</li>
        <li className={styles.menuItem}>Sobre mim</li>
      </div>

      <div className={styles.banner}>
        <Image src="/image/background0.jpg" alt="Banner" width={1920} height={600} className={styles.bannerImg} />
      </div>
    </div>
  )
}