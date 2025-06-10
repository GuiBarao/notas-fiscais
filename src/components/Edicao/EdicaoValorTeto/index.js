import CampoValor from "../../CampoFiltro/FiltroValor/CampoValor/CampoValor.js";
import styles from "./styles.module.css";
import mudar_valorTeto from "../../../services/put/valor-teto.js";
import { useState } from "react";
const EdicaoValorTeto = ({setEdicaoValorTeto, nome_filial}) => {

    const [novoValor, setNovoValor] = useState("");

    const edita_valorTeto = async (nome_filial) => {
       
        try {
            const response = mudar_valorTeto(nome_filial, novoValor)
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
                    onClick={() => {edita_valorTeto(nome_filial); 
                                setEdicaoValorTeto({ativado : false, filial: ""});}
                            }>
                    Salvar
                </button>

                <button className={styles.fechar} onClick={() => setEdicaoValorTeto({ativado : false, filial: ""})}>
                    Fechar
                </button>
            </div>
            <h1>Digite o valor teto da filial {nome_filial}</h1>
            {console.log("Valor: " + novoValor)}
            <CampoValor onChange={(ev) => {setNovoValor(ev.target.value)}} value={novoValor} />
            

        </div>
    
    )
}


export default EdicaoValorTeto;