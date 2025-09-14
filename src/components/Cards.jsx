import styles from "../styles/Cards.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Cards({ character, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            <Image
                src={character.image}
                alt={character.name}
                className={styles.img}
                width={300}
                height={300}
            />

            <div className={styles.info}>
                <h1 className={styles.title}>{character.name}</h1>
            </div>    

            <div className={styles.details}>
            <Link href={`/home/${character.id}`}>
                <button>Detalhes</button>
            </Link>

            </div>
</div>
    )
}