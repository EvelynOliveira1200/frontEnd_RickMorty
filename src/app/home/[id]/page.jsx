"use client";
import { useEffect, useState } from "react";
import styles from "./[id].module.css";

export default function Detalhes({ params }) {
    const { id } = params;
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://rickandmortyapi.com/api/character/${id}`
                );
                if (!response.ok) throw new Error("Erro ao buscar personagem");
                const data = await response.json();
                setCharacter(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <h1>Detalhes do personagem {id}</h1>
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {character && (
                <div>
                    <p className={styles.text}><span className={styles.span}>Status: </span>{character.status}</p>
                    <p className={styles.text}><span className={styles.span}>Espécie: </span>{character.species}</p>
                    <p className={styles.text}><span className={styles.span}>Tipo: </span>{character.type || "Sem Tipo"}</p>
                    <p className={styles.text}><span className={styles.span}>Gênero: </span>{character.gender}</p>
                </div>
            )}
        </div>
    );
}