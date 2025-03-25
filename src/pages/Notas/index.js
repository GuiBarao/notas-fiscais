import AcordeaoFilial from "../../components/AcordeaoFilial/AcordeaoFilial";
import filiais from "../../json/db.json"
import CampoFiltro from "../../components/CampoFiltro/CampoFiltro.js"
import styles from "./Notas.module.css";
import Cabecalho from "../../components/Cabecalho/Cabecalho.js";


function Notas () {
    return (
        <section className={styles.notas}>
            <CampoFiltro />
            
            <div className={styles.header_filtros_wrapper}>
                
                <Cabecalho />

                <div>
                    {filiais.map( (filial) => {
                        return <AcordeaoFilial {...filial} />
                    })}
                </div>

            </div>

        </section>
    );
}

export default Notas;