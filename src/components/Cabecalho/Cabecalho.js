import styles from "./Cabecalho.module.css";
import FiltroFiliais from "./FiltroFiliais/FiltroFiliais";
//import unidades from "../../json/db.json";
import FiltroData from "./FiltroData/FiltroData.js";
import { useEffect, useState } from "react";

import buscaFiliais from "../../services/get/filiais-disponiveis.js";

function Cabecalho ({filtroFiliaisValue, filtroFiliaisOnChange, dataInicioValue, dataInicioOnChange, dataFimValue, dataFimOnChange})
{
    const [filiais, setFiliais] = useState([])

    const buscarFiliais = async () => {
        try {
            const response = await buscaFiliais();
            setFiliais(response);
        }
        catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {buscarFiliais()}, []);   

    return (
        <header className={styles.cabecalho}>
            <h1>Notas Fiscais</h1>

            <div className={styles.filtros}>
                <FiltroFiliais filtragem={filtroFiliaisValue} onChangeFiltragem={filtroFiliaisOnChange} 
                filiais={filiais}/>

                <FiltroData inicioValue = {dataInicioValue} inicioOnChange = {dataInicioOnChange} 
                fimValue = {dataFimValue} fimOnChange = {dataFimOnChange}/>
            </div>

        </header>
    );
}

export default Cabecalho; 