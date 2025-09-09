"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import { Pagination } from 'antd';
import styles from "./Home.module.css";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);

    const currentCharacters = characters.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handlePageChange = (page) => {
        setCurrentPage(page); 
    };

    const handlePageSizeChange = (current, size) => {
        setPageSize(size); 
        setCurrentPage(1); 
    };

    const fetchCharacters = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                "https://api.sampleapis.com/rickandmorty/characters"
            );
            console.log("Resposta da API:", response.data);
            if (response.status === 200 && Array.isArray(response.data)) {
                setCharacters(response.data); 
                console.log("Total de personagens:", response.data.length); 
            } else {
                console.error("Resposta inesperada:", response);
            }
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <div className={styles.container}>
            <Header />

            {loading && <p className="text-center">Carregando...</p>}

            <div className={styles.cardGrid}>
                {currentCharacters.length > 0 ? (
                    currentCharacters.map((character) => (
                        <Cards
                            key={character.id || character.name} 
                            character={character}
                            onClick={() => console.log(character.name)}
                        />
                    ))
                ) : (
                    !loading && <p className="text-center">Nenhum personagem encontrado.</p>
                )}
            </div>

            <div className="flex justify-center mt-4">
                <Pagination
                    current={currentPage} 
                    pageSize={pageSize} 
                    total={characters.length} 
                    onChange={handlePageChange} 
                    showSizeChanger 
                    onShowSizeChange={handlePageSizeChange} 
                />
            </div>
        </div>
    );
}