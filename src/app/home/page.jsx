"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import styles from "./Home.module.css";


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

    // Paginação local
    const totalPages = Math.ceil(characters.length / pageSize) || 1;
    const currentCharacters = characters.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    // Atualiza página para 1 se mudar o pageSize
    useEffect(() => {
        setCurrentPage(1);
    }, [pageSize]);

    return (
        <div className={styles.parallaxWrapper}>
            <div
                className={styles.backgroundGalaxy}
                style={{
                    transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`
                }}
            />
            <div
                className={styles.backgroundStars}
                style={{
                    transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`
                }}
            />
            <div
                className={styles.backgroundPlanets}
                style={{
                    transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`
                }}
            />
            <div className={styles.container}>
                <Header />

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
                        Anterior
                    </button>
                    <span>
                        Página {currentPage} de {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={styles.buttonPage}
                    >
                        Próxima
                    </button>
                    <label style={{ marginLeft: 16 }}>Cards por página: </label>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        <option value={4}>4</option>
                        <option value={8}>8</option>
                        <option value={30}>30</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
