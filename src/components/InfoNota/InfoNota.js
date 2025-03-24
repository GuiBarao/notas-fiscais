import styles from "./InfoNota.module.css";



function InfoNota({nomeInfo, arquivoIMG, altIMG, info }) {
    return (
        <section className = {styles.infoNota}>
            <div className = {styles.icone_titulo}>
                <img src = {`/images/${arquivoIMG}.svg`} alt = {altIMG} />
                <h1>{nomeInfo}</h1>
            </div>
            <p className={styles.info}>{info}</p>
        </section>

    )
}

export default InfoNota;