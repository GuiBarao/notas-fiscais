import styles from "./FiltroStatus.module.css"
import CampoStatusFiltro from "../CampoStatusFiltro/CampoStatusFiltro";

function FiltroStatus() {
    return (
        <section className={styles.filtro_status}>
            <div className={styles.img_titulo_wrapper}>
                <img src = "/images/status_icon.svg" alt = "icone de status"/>
                <h1>Status:</h1>
            </div>

            <div className={styles.opcoes_status}>
                <CampoStatusFiltro status = {true}/>
                <CampoStatusFiltro status = {false}/>
            </div>

        </section>
    );
}

export default FiltroStatus;