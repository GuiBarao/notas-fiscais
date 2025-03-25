import styles from "./InfoErro.module.css";

function InfoErro({mensagem, log}) {
    return  (
        <section className={styles.InfoErro}>

            <div className={styles.wrapper_mensagem}>
                <h1>Mensagem:</h1>
                <p>{mensagem}</p>
            </div>

            <div className={styles.linha}></div>

            <div className={styles.wrapper_log}>
                <h1>Log:</h1>
                <p>{log}</p>
            </div>

        </section>
    );
}

export default InfoErro;