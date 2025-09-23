"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);

    const fetchAllCharacters = async () => {
        setLoading(true);
        try {
            let allCharacters = [];
            let page = 1;
            let totalPagesApi = 1;
            do {
                const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
                allCharacters = allCharacters.concat(response.data.results);
                totalPagesApi = response.data.info.pages;
                page++;
            } while (page <= totalPagesApi);
            setCharacters(allCharacters);
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllCharacters();
    }, []);

    const totalPages = Math.ceil(characters.length / pageSize) || 1;
    const currentCharacters = characters.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    useEffect(() => {
        setCurrentPage(1);
    }, [pageSize]);

    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.banner}>
                <Image
                    className={styles.bannerImage}
                    src="/image/banner_lista.png"
                    alt="Banner"
                    width={1920}
                    height={1080}
                />
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Conheça os Personagens</h1>
                    <p className={styles.bannerDescription}>
                        Explore mais de 800 personagens do universo de Rick and Morty com nossa API! Descubra curiosidades, detalhes e imagens de seus personagens favoritos de forma prática e completa.
                    </p>
                    <Link href="/infoApi">
                        <button className={styles.ctaButton}>Explorar Personagens</button>
                    </Link>
                </div>
            </section>

            {loading && <p className="text-center">Carregando...</p>}

            {!loading && (
                <div className={styles.cardGrid}>
                    {currentCharacters.map((character) => (
                        <Cards
                            key={character.id}
                            character={character}
                        />
                    ))}
                </div>
            )}

            <div className={styles.pagination}>
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={styles.buttonPage}
                >
                    ← Anterior
                </button>
                <span className={styles.paginationLabel}>
                    Página {currentPage} de {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={styles.buttonPage}
                >
                    Próxima →
                </button>
                <label className={styles.paginationLabel}>Cards por página:</label>
                <select className={styles.selectPageSize} value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    <option className={styles.optionPageSize} value={4}>4</option>
                    <option className={styles.optionPageSize} value={8}>8</option>
                    <option className={styles.optionPageSize} value={30}>30</option>
                </select>
            </div>
        </div>
    );
}
