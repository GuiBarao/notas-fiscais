import AcordeaoFilial from "../../components/AcordeaoFilial/AcordeaoFilial";
import filiais from "../../json/db.json"
import CampoFiltro from "../../components/CampoFiltro/CampoFiltro.js"
import styles from "./Notas.module.css";

function Notas () {
    return (
        <section className={styles.notas}>

            <div className={styles.filtro_notas}>
                <CampoFiltro />

                <div className={styles.acordeoes_filiais}>
                    {filiais.map( (filial) => {
                        return <AcordeaoFilial {...filial} />
                    })}
                </div>

            </div>

        </section>
    );
}

export default Notas;