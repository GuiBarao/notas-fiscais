import styles from "./Cabecalho.module.css";
import FiltroFiliais from "../FiltroFiliais/FiltroFiliais";
import unidades from "../../json/db.json";

function Cabecalho ({value, onChange})
{
    const listaFiliais = unidades.map((unidade) => unidade.filial);    

    return (
        <header className={styles.cabecalho}>
            <h1>Notas Fiscais</h1>

            <FiltroFiliais filtragem={value} onChangeFiltragem={onChange} filiais={listaFiliais}/>

        </header>
    );
}

export default Cabecalho; 