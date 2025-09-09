import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                src="/image/logo.png"
                alt="Logo"
                width={220}
                height={220}
                className={styles.logo}
            />
            <ul className={styles.menu}>
                <li className={styles.menuItem}>Personagens</li>
                <li className={styles.menuItem}>Detalhes</li>
                <li className={styles.menuItem}>Sobre mim</li>
            </ul>
        </header>
    );
}