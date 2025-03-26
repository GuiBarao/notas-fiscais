import AcordeaoFilial from "../../components/AcordeaoFilial/AcordeaoFilial";
import filiais from "../../json/db.json"
import CampoFiltro from "../../components/CampoFiltro/CampoFiltro.js"
import styles from "./Notas.module.css";
import Cabecalho from "../../components/Cabecalho/Cabecalho.js";
import { useState } from "react";


function Notas () {

    const [filtroNomeTitular, setFiltroNomeTitular] = useState("");
    const [filtroCPF, setFiltroCPF] = useState("");
    const [filtroNumero, setFiltroNumero] = useState("");

    const [filtroValorMin, setFiltroValorMin] = useState("");
    const [filtroValorMax, setFiltroValorMax] = useState(Number.POSITIVE_INFINITY);

    const [filtroStatusValido, setFiltroStatusValido] = useState(true);
    const [filtroStatusInvalido, setFiltroStatusInvalido] = useState(true);

    return (

        <section className={styles.notas}>
            <CampoFiltro 
                onFiltrarNome={setFiltroNomeTitular} 
                onFiltrarCPF={setFiltroCPF}
                onFiltrarNumero={setFiltroNumero}
                onFiltrarValorMin={setFiltroValorMin}
                onFiltrarValorMax={setFiltroValorMax}
                onFiltrarStatusValido={setFiltroStatusValido}
                onFiltrarStatusInvalido={setFiltroStatusInvalido}
            />
            
            <div className={styles.header_filtros_wrapper}>
                
                <Cabecalho/>

                <div>
                    {filiais.map( (filial) => {
                        return <AcordeaoFilial {...filial} 
                        filtroNomeTitular = {filtroNomeTitular} 
                        filtroCPF = {filtroCPF}
                        filtroNumero = {filtroNumero}
                        filtroValorMin = {filtroValorMin}
                        filtroValorMax = {filtroValorMax}
                        filtroStatusValido = {filtroStatusValido}
                        filtroStatusInvalido = {filtroStatusInvalido}
                        />
                    })}
                </div>

            </div>

        </section>
    );
}

export default Notas;