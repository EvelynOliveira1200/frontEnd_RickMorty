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
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(8)

    const fetchCharacters = async (page) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://rickandmortyapi.com/api/character?page=${page}`
            );
            setCharacters(response.data.results);
            setTotalPages(response.data.info.pages);
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters(currentPage);
    }, [currentPage]);

    return (
        <div className={styles.container}>
            <Header />

            {loading && <p className="text-center">Carregando...</p>}

            {!loading && (
                <div className={styles.cardGrid}>
                    {characters.map((character) => (
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
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={styles.buttonPage}
                >
                    Próxima
                </button>

                <select value={pageSize} onChange={e => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}>
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                </select>
            </div>
        </div>
    );
}
