import styles from "./not-found.module.css";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <div className={styles.errorCodeContainer}>
                    <div className={styles.errorCodeBg}>404</div>
                    <div className={styles.errorCodeFront}><h1>4</h1>
                        <Image src="/image/error.png" alt="404" width={100} height={100} />
                        <h1>4</h1>
                    </div>
                </div>

                <h1 className={styles.title}>Página não encontrada</h1>

                <p className={styles.description}>Ops! A página que você está procurando não existe ou foi movida para outro local.</p>
            </div>
        </div>
    );
}