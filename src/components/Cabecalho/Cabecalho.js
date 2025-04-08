import styles from "./Cabecalho.module.css";
import FiltroFiliais from "../FiltroFiliais/FiltroFiliais";
import unidades from "../../json/db.json";
import FiltroData from "../FiltroData/FiltroData";

function Cabecalho ({filtroFiliaisValue, filtroFiliaisOnChange, dataInicioValue, dataInicioOnChange, dataFimValue, dataFimOnChange})
{
    const listaFiliais = unidades.map((unidade) => unidade.filial);    

    return (
        <header className={styles.cabecalho}>
            <h1>Notas Fiscais</h1>

            <div className={styles.filtros}>
                <FiltroFiliais filtragem={filtroFiliaisValue} onChangeFiltragem={filtroFiliaisOnChange} 
                filiais={listaFiliais}/>

                <FiltroData inicioValue = {dataInicioValue} inicioOnChange = {dataInicioOnChange} 
                fimValue = {dataFimValue} fimOnChange = {dataFimOnChange}/>
            </div>

        </header>
    );
}

export default Cabecalho; 