import AcordeaoFilial from "../../components/AcordeaoFilial/AcordeaoFilial";
import filiais from "../../json/db.json"
import CampoFiltro from "../../components/CampoFiltro/CampoFiltro.js"
import styles from "./Notas.module.css";
import Cabecalho from "../../components/Cabecalho/Cabecalho.js";
import { useState } from "react";


function Notas () {

    const [filtroNomeTitular, setFiltroNomeTitular] = useState("");
    const [filtroCPF, setFiltroCPF] = useState("");
    return (

        <section className={styles.notas}>
            <CampoFiltro onFiltrarNome={setFiltroNomeTitular} onFiltrarCPF={setFiltroCPF}/>
            
            <div className={styles.header_filtros_wrapper}>
                
                <Cabecalho/>

                <div>
                    {filiais.map( (filial) => {
                        return <AcordeaoFilial {...filial} 
                        filtroNomeTitular = {filtroNomeTitular} 
                        filtroCPF = {filtroCPF}
                        />
                    })}
                </div>

            </div>

        </section>
    );
}

export default Notas;