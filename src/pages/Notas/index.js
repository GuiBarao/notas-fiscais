import AcordeaoFilial from "../../components/AcordeaoFilial/AcordeaoFilial";
import filiais from "../../json/db.json"
import CampoFiltro from "../../components/CampoFiltro/CampoFiltro.js"
import styles from "./Notas.module.css";
import Cabecalho from "../../components/Cabecalho/Cabecalho.js";
import { useState } from "react";


function Notas () {

    const [filtroNomeTitular, setFiltroNomeTitular] = useState("");

    return (

        <section className={styles.notas}>
            <CampoFiltro onFiltrar={setFiltroNomeTitular}/>
            
            <div className={styles.header_filtros_wrapper}>
                
                <Cabecalho/>

                <div>
                    {filiais.map( (filial) => {
                        return <AcordeaoFilial {...filial} filtroNomeTitular = {filtroNomeTitular} />
                    })}
                </div>

            </div>

        </section>
    );
}

export default Notas;