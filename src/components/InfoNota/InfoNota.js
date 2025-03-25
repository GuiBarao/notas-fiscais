import styles from "./InfoNota.module.css";



function InfoNota({nomeInfo, arquivoIMG, altIMG, info, largura }) {
    return (
        <section className = {styles.infoNota}>
            <div className = {styles.icone_titulo}>
                <img src = {`/images/${arquivoIMG}.svg`} alt = {altIMG} />
                <h1>{nomeInfo}</h1>
            </div>

            <div className={styles.info_wrapper} style={{width: `${largura}px`}}>
                <p>{info}</p>
            </div>
        </section>

    )
}

export default InfoNota;