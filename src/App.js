import AcordeaoFilial from "./components/AcordeaoFilial/AcordeaoFilial.js";
import unidades from "./json/db.json"
import CampoFiltro from "./components/CampoFiltro/CampoFiltro.js"
import styles from "./App.module.css";
import Cabecalho from "./components/Cabecalho/Cabecalho.js";
import dayjs from 'dayjs';
import { useState } from "react";

function filtragemNotas(nota, filtroNomeTitular, filtroCPF, filtroNumero, filtroValorMin, 
    filtroValorMax, filtroStatus, dataInicial, dataFinal) {

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
        return false;
    }

    if(nota.status && filtroStatus === "Inválido")
    {
        return false;
    }

    if((dayjs(nota.data).isBefore(dataInicial) || dayjs(nota.data).isAfter(dataFinal)) 
        || (dataInicial === null || dataFinal === null))
    {
        return false;
    }

    return true;
}

function App () {

    const [filtroNomeTitular, setFiltroNomeTitular] = useState("");
    const [filtroCPF, setFiltroCPF] = useState("");
    const [filtroNumero, setFiltroNumero] = useState("");

    const [filtroValorMin, setFiltroValorMin] = useState("");
    const [filtroValorMax, setFiltroValorMax] = useState(Number.POSITIVE_INFINITY);

    const [filtroStatus, setFiltroStatus] = useState("");

    const [filtroFiliais, setFiltroFiliais] = useState([]);

    const [filtroDataInicio, setFiltroDataInicio] = useState(null);
    const [filtroDataFim, setFiltroDataFim] = useState(null);

    const lowerNomeTitular = filtroNomeTitular.toLowerCase(); 

    const unidadesFiltradas = unidades.filter((unidade) => filtroFiliais.includes(unidade.filial));

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
                
                <Cabecalho filtroFiliaisValue = {filtroFiliais} filtroFiliaisOnChange={setFiltroFiliais}
                dataInicioValue = {filtroDataInicio} dataInicioOnChange = {setFiltroDataInicio} 
                dataFimValue = {filtroDataFim} dataFimOnChange = {setFiltroDataFim}/>

                <div className={styles.acordeoes}>
                    {unidadesFiltradas.map( (unidade) => 
                         <AcordeaoFilial filial={unidade.filial} valor_teto={unidade.valor_teto}
                         notas={unidade.notas.filter((nota) => filtragemNotas( nota, lowerNomeTitular, 
                             filtroCPF, filtroNumero, 
                             filtroValorMin, filtroValorMax,
                             filtroStatus, filtroDataInicio, filtroDataFim))}
                         key={unidade.filial}/>  )}
                </div>

            </div>

        </section>
    );
}

export default App;

