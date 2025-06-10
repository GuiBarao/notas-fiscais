import CampoValor from "../../CampoFiltro/FiltroValor/CampoValor/CampoValor.js";
import styles from "./styles.module.css";
import mudar_valorTeto from "../../../services/put/valor-teto.js";

const EdicaoValorTeto = ({setEdicaoValorTeto, nome_filial}) => {

    

    const edita_valorTeto = async (nome_filial, novo_valor) => {
       
        try {
            const response = mudar_valorTeto(nome_filial, novo_valor)
            return response;
        }
        catch(error) {
            console.error(error)
        }
    }

    return (
       
        <div className={styles.edicao}>
            <div className={styles.botoes}>

                <button className={styles.salvar} 
                    onClick={() => {edita_valorTeto(nome_filial, 400); 
                                setEdicaoValorTeto({ativado : false, filial: ""});}
                            }>
                    Salvar
                </button>

                <button className={styles.fechar} onClick={() => setEdicaoValorTeto({ativado : false, filial: ""})}>
                    Fechar
                </button>
            </div>
            <h1>Digite o valor teto da filial {nome_filial}</h1>
            <CampoValor />
            

        </div>
    
    )
}


export default EdicaoValorTeto;