"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import Link from "next/link";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        setMousePos({ x, y });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Busca todos os personagens para paginação local
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
            <section className={styles.videoBanner}>
                <video
                    className={styles.bannerVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/image/bannerVideo.mp4" type="video/mp4" />
                </video>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Conheça os Personagens</h1>
                    <p className={styles.bannerDescription}>
                        Explore mais de 800 personagens do universo de Rick and Morty com nossa API! Descubra curiosidades, detalhes e imagens de seus personagens favoritos de forma prática e completa.
                    </p>
                    <Link href="/infoApi">
                        <button className={styles.ctaButton}>Explorar Personagens
                        </button>
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
