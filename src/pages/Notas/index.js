import AcordeaoFilial from "../../components/AcordeaoFilial/AcordeaoFilial";
import unidades from "../../json/db.json"
import CampoFiltro from "../../components/CampoFiltro/CampoFiltro.js"
import styles from "./Notas.module.css";
import Cabecalho from "../../components/Cabecalho/Cabecalho.js";
import { useState } from "react";

function filtragem(nota, filtroNomeTitular, filtroCPF, filtroNumero, filtroValorMin, 
    filtroValorMax, filtroStatusValido, filtroStatusInvalido) {
  
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
    
    if(!filtroStatusValido && !filtroStatusInvalido)
    {
      return false;
    }
  
    if ((filtroStatusValido && !nota.status) && !filtroStatusInvalido)
    {
        return false;
    }
  
    if ((filtroStatusInvalido && nota.status) && !filtroStatusValido)
    {
        return false;
    }
  
  
    return true;
}
  

function Notas () {

    const [filtroNomeTitular, setFiltroNomeTitular] = useState("");
    const [filtroCPF, setFiltroCPF] = useState("");
    const [filtroNumero, setFiltroNumero] = useState("");

    const [filtroValorMin, setFiltroValorMin] = useState("");
    const [filtroValorMax, setFiltroValorMax] = useState(Number.POSITIVE_INFINITY);

    const [filtroStatusValido, setFiltroStatusValido] = useState(true);
    const [filtroStatusInvalido, setFiltroStatusInvalido] = useState(true);

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
                onFiltrarStatusValido={setFiltroStatusValido}
                onFiltrarStatusInvalido={setFiltroStatusInvalido}
            />
            
            <div className={styles.header_filtros_wrapper}>
                
                <Cabecalho/>

                <div className={styles.acordeoes}>
                    {unidades.map( (unidade) => {
                        return <AcordeaoFilial filial={unidade.filial} valor_teto={unidade.valor_teto}
                                                notas={unidade.notas.filter((nota) => filtragem( nota, lowerNomeTitular, 
                                                    filtroCPF, filtroNumero, 
                                                    filtroValorMin, filtroValorMax,
                                                    filtroStatusValido, filtroStatusInvalido))}
                        
                        />
                    })}
                </div>

            </div>

        </section>
    );
}

export default Notas;