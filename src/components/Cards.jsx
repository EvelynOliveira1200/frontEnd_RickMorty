import React from "react";
import styles from "../styles/Cards.module.css";
import Image from "next/image";

export default function Cards({ character, onClick }) {
    const imageUrl = character?.image || "https://placehold.jp/200x200.png";
    const name = character?.name || "Desconhecido";
    const status = character?.status || "Desconhecido";

    return (
        <div className={styles.cardContainer} onClick={onClick}>
            <div className={styles.card}>
                <Image
                    src={imageUrl}
                    alt={name}
                    className={styles.img}
                    width={300}
                    height={300}
                />
                <div className={styles.cardContent}>
                    <h1 className={styles.title}>{name}</h1>
                    <p className={styles.text}><span className={styles.span}>Status: </span>{status}</p>
                </div>
            </div>
        </div>
    );
}
