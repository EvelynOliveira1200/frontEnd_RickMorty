
"use client";
import React from "react";
import styles from "./InfoApi.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

export default function Home() {
  const characters = [
    { name: "Rick Sanchez", img: "/image/rick.png" },
    { name: "Morty Smith", img: "/image/morty.png" },
    { name: "Summer Smith", img: "/image/summer.png" },
    { name: "Birdperson", img: "/image/birdperson.png" },
  ];

  return (
    <div className={styles.container}>
      <Header/>

      <section className={styles.banner}>
        <Image
          src="/image/banner_infoApi.jpg"
          alt="Banner"
          width={1920}
          height={1080}
          className={styles.bannerImg}
        />
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Bem-Vindo</h1>
          <p className={styles.bannerDescription}>
            A Rick and Morty API é gratuita e pública, oferecendo dados sobre
            personagens, episódios e locais da série. Ideal para estudos,
            consumo via REST e exploração do multiverso da animação de forma
            simples e acessível.
          </p>
          <Link href="/home">
          <button className={styles.ctaButton}>Explorar Personagens
          </button>
          </Link>
        </div>
      </section>

      <section className={styles.infoApi}>
        <div className={styles.divInfoApi}>
          <h2 className={styles.infoApiTitle}>Sobre Api</h2>
          <p className={styles.infoApiDescription}>
            A Rick and Morty API é uma API RESTful gratuita e pública que
            fornece informações detalhadas sobre personagens, episódios e
            locais da série de animação "Rick and Morty". Ela é amplamente
            utilizada por desenvolvedores para criar aplicativos, sites e
            projetos relacionados à série. A API é fácil de usar e oferece
            dados estruturados em formato JSON, tornando-a acessível para uma
            variedade de linguagens de programação e plataformas.
          </p>
          <ul className={styles.infoApiList}>
            <h3 className={styles.infoApiListTitle}>📱 Lista de Atributos da API</h3>
            <li className={styles.infoApiListItem}>Personagens</li>
            <li className={styles.infoApiListItem}>Episódios</li>
            <li className={styles.infoApiListItem}>Localização</li>
          </ul>
          <h3 className={styles.infoApiListTitle}>🔗 URL base usada para o axios</h3>
          <div className={styles.infoApiExample}>
            <p className={styles.infoApiUrl}>
              https://api.sampleapis.com/rickandmorty/
            </p>
          </div>

          <h3 className={styles.infoApiListTitle}>📍 Exemplo de endpoint</h3>
          <div className={styles.infoApiExample}>
            <p className={styles.infoApiUrl}>
              https://api.sampleapis.com/rickandmorty/characters
            </p>
          </div>

          <div className={styles.infoApiExample}>
            <p>https://api.sampleapis.com/rickandmorty/episodes</p>
          </div>

          <div className={styles.infoApiExample}>
            <p className={styles.infoApiUrl}>
              https://api.sampleapis.com/rickandmorty/locations
            </p>
          </div>
        </div>
        <div className={styles.imgInfo}>
          <Image
            src="/image/img.jpg"
            alt="Info Api"
            width={600}
            height={400}
            className={styles.infoApiImg}
          />
        </div>
      </section>
    </div>
  );
}
