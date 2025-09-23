"use client";
import { useEffect, useState } from "react";
import styles from "./[id].module.css";
import Image from "next/image";
import Header from "../../../components/Header";

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
        <div className={styles.container}>
            <div className={styles.background}>
                <Image
                    src="/image/fundo6.jpg"
                    alt="fundo"
                    fill
                    className={styles.bannerImg}
                    priority
                />
            </div>

            <Header />


            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {character && (
                <div className={styles.characterDetails}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={character.image}
                            alt={character.name}
                            width={300}
                            height={300}
                            className={styles.image}
                        />

                    </div>

                    <div className={styles.content}>
                        <h1 className={styles.title}>{character.name}</h1>
                        <p className={styles.description}>
                            {character.name} é da espécie {character.species}.
                        </p>
                        <p className={styles.description}>
                            {character.type ? `Tipo: ${character.type}.` : ""}
                        </p>
                        <p className={styles.description}>
                            Atualmente está {character.status.toLowerCase()}.
                        </p>

                        <div className={styles.details}>
                            <p className={styles.text}><span className={styles.span}>Status: </span>{character.status}</p>
                            <p className={styles.text}><span className={styles.span}>Espécie: </span>{character.species}</p>
                            <p className={styles.text}><span className={styles.span}>Tipo: </span>{character.type || "Sem Tipo"}</p>
                            <p className={styles.text}><span className={styles.span}>Gênero: </span>{character.gender}</p>
                            <p className={styles.text}><span className={styles.span}>Origem: </span>{character.origin.name}</p>
                            <p className={styles.text}><span className={styles.span}>Localização: </span>{character.location.name}</p>
                            <p className={styles.text}><span className={styles.span}>Número de Episódios: </span>{character.episode.length}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}