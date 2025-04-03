import AcordeaoFilial from "../../components/AcordeaoFilial/AcordeaoFilial";
import unidades from "../../json/db.json"
import CampoFiltro from "../../components/CampoFiltro/CampoFiltro.js"
import styles from "./Notas.module.css";
import Cabecalho from "../../components/Cabecalho/Cabecalho.js";
import { useState } from "react";

function filtragem(nota, filtroNomeTitular, filtroCPF, filtroNumero, filtroValorMin, 
    filtroValorMax, filtroStatus) {
    
    console.log(nota.titular.toLowerCase(), "---", filtroNomeTitular)

    if( !nota.titular.toLowerCase().includes(filtroNomeTitular) && filtroNomeTitular !== "")
    {
        return false;
    }
  
    if(nota.cpf !== filtroCPF && filtroCPF !== "")
    {
        return false;
    }
  
    if(nota.numero !== filtroNumero && filtroNumero !== "")
    {
        return false;
    }
  
    
    if (nota.valor < parseInt(filtroValorMin) && filtroValorMin !== "" )
    {
        return false;
    }
    
    if (nota.valor > parseInt(filtroValorMax))
    {
        return false;
    }
  
    if(!nota.status && filtroStatus === "Válido")
    {
        return false
    }

    if(nota.status && filtroStatus === "Inválido")
    {
        return false
    }
  
  
    return true;
}
  

function Notas () {

    const [filtroNomeTitular, setFiltroNomeTitular] = useState("");
    const [filtroCPF, setFiltroCPF] = useState("");
    const [filtroNumero, setFiltroNumero] = useState("");

    const [filtroValorMin, setFiltroValorMin] = useState("");
    const [filtroValorMax, setFiltroValorMax] = useState(Number.POSITIVE_INFINITY);

    const [filtroStatus, setFiltroStatus] = useState("Todos");

    /*Normalização do filtro de nome do titular*/
    const lowerNomeTitular = filtroNomeTitular.toLowerCase(); 


    return (

        <section className={styles.notas}>
            <CampoFiltro 
                onFiltrarNome={setFiltroNomeTitular} 
                onFiltrarCPF={setFiltroCPF}
                onFiltrarNumero={setFiltroNumero}
                onFiltrarValorMin={setFiltroValorMin}
                onFiltrarValorMax={setFiltroValorMax}
                onFiltrarStatus={setFiltroStatus}
            />
            
            <div className={styles.header_filtros_wrapper}>
                
                <Cabecalho/>

                <div className={styles.acordeoes}>
                    {unidades.map( (unidade) => {
                        return <AcordeaoFilial filial={unidade.filial} valor_teto={unidade.valor_teto}
                                                notas={unidade.notas.filter((nota) => filtragem( nota, lowerNomeTitular, 
                                                    filtroCPF, filtroNumero, 
                                                    filtroValorMin, filtroValorMax,
                                                    filtroStatus))}
                                                key={unidade.filial}
                        
                        />
                    })}
                </div>

            </div>

        </section>
    );
}

export default Notas;