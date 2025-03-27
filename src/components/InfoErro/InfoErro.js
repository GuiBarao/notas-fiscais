import styles from "./InfoErro.module.css";

function InfoErro({mensagem, log}) {
    return  (
        <section className={styles.infoErro}>

            <div className={styles.wrapper_titulo_info}>
                <h1 className={styles.titulo}>Mensagem:</h1>
                <p className={styles.info}>{mensagem}</p>
            </div>

            <div className={styles.linha}></div>

            <div className={styles.wrapper_titulo_info}>
                <h1 className={styles.titulo}>Log:</h1>
                <p className={styles.info}>{log}</p>
            </div>

        </section>
    );
}

export default InfoErro;