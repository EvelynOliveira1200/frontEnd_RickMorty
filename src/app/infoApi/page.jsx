"use client"
import React from 'react'
import styles from './infoApi.module.css'
import Image from 'next/image'

export default function Home() {
  const characters = [
    { name: "Rick Sanchez", img: "/image/rick.png" },
    { name: "Morty Smith", img: "/image/morty.png" },
    { name: "Summer Smith", img: "/image/summer.png" },
    { name: "Birdperson", img: "/image/birdperson.png" }
  ]

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src="/image/logo.png" alt="Logo" width={220} height={220} className={styles.logo} />
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Personagens</li>
          <li className={styles.menuItem}>Detalhes</li>
          <li className={styles.menuItem}>Sobre mim</li>
        </ul>
      </header>

      <section className={styles.banner}>
        <Image src="/image/banner01.png" alt="Banner" width={1920} height={1080} className={styles.bannerImg} />
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Bem-Vindo</h1>
          <p className={styles.bannerDescription}>A Rick and Morty API é gratuita e pública, oferecendo dados sobre personagens, episódios e locais da série. Ideal para estudos, consumo via REST e exploração do multiverso da animação de forma simples e acessível.</p>
         <button className={styles.ctaButton}>Explorar Personagens</button></div>
       
      </section>
    </div>
  )
}
