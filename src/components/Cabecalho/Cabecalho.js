import styles from "./Cabecalho.module.css";
import FiltroFiliais from "./FiltroFiliais/FiltroFiliais";
import FiltroData from "./FiltroData/FiltroData.js";

function Cabecalho ({filiais, filtroFiliaisValue, filtroFiliaisOnChange, dataInicioValue, dataInicioOnChange, dataFimValue, dataFimOnChange})
{
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