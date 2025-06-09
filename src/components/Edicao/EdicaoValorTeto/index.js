import CampoValor from "../../CampoFiltro/FiltroValor/CampoValor/CampoValor.js";
import styles from "./styles.module.css";
const EdicaoValorTeto = ({setEdicaoValorTeto, nomeFilial}) => {


    return (
       
        <div className={styles.edicao}>
            <div className={styles.botoes}>
                <button className={styles.salvar} onClick={() => setEdicaoValorTeto(false)}>Salvar</button>
                <button className={styles.fechar} onClick={() => setEdicaoValorTeto(false)}>Fechar</button>
            </div>
            <h1>Digite o valor teto da filial {nomeFilial}</h1>
            <CampoValor />
            

        </div>
    
    )
}


export default EdicaoValorTeto;