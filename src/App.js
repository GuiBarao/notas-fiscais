import AcordeaoFilial from "./components/AcordeaoFilial/AcordeaoFilial.js";
import unidades from "./json/db.json"
import CampoFiltro from "./components/CampoFiltro/CampoFiltro.js"
import styles from "./App.module.css";
import Cabecalho from "./components/Cabecalho/Cabecalho.js";
import dayjs from 'dayjs';

import { useFiltros } from "./contexts/FiltrosContext.js";


function filtragemNotas(nota, filtroNomeTitular, filtroCPF, filtroNumero, filtroValorMin, 
    filtroValorMax, filtroStatus, dataInicial, dataFinal) {

    if( !nota.titular.toLowerCase().includes(filtroNomeTitular) && filtroNomeTitular !== ""){
        return false;
    }
  
    if(nota.cpf !== filtroCPF && filtroCPF !== ""){
        return false;
    }
  
    if(nota.numero !== filtroNumero && filtroNumero !== ""){
        return false;
    }
  

    if(nota.valor < parseInt(filtroValorMin) || nota.valor > parseInt(filtroValorMax)){
        return false;
    }

    if(!nota.status && filtroStatus === "Válido"){
        return false;
    }

    if(nota.status && filtroStatus === "Inválido"){
        return false;
    }

    if((dayjs(nota.data).isBefore(dataInicial) || dayjs(nota.data).isAfter(dataFinal)) 
        || (dataInicial === null || dataFinal === null)){
        return false;
    }

    return true;
}

function App () {


    const { filtroTitular, filtroCpf, filtroNumero,
            filtroValorMin, filtroValorMax, filtroStatus,
            filtroFiliais, filtroDataInicio, filtroDataFim,
            setFiltroFiliais, setFiltroDataInicio, setFiltroDataFim
        } = useFiltros();

    const lowerNomeTitular = filtroTitular.toLowerCase(); 

    const unidadesFiltradas = unidades.filter((unidade) => filtroFiliais.includes(unidade.filial));

    return (
        <section className={styles.notas}>

            <CampoFiltro />
            
            <div className={styles.header_filtros_wrapper}>
                
                <Cabecalho filtroFiliaisValue = {filtroFiliais} filtroFiliaisOnChange={setFiltroFiliais}
                dataInicioValue = {filtroDataInicio} dataInicioOnChange = {setFiltroDataInicio} 
                dataFimValue = {filtroDataFim} dataFimOnChange = {setFiltroDataFim}/>

                <div className={styles.accordions}>
                    {unidadesFiltradas.map( (unidade) => 
                        <AcordeaoFilial filial={unidade.filial} valor_teto={unidade.valor_teto}
                        notas={unidade.notas.filter((nota) => filtragemNotas( nota, lowerNomeTitular, 
                            filtroCpf, filtroNumero, 
                            filtroValorMin, filtroValorMax,
                            filtroStatus, filtroDataInicio, filtroDataFim))}
                        key={unidade.filial}/>  )}
                </div>

            </div>

        </section>
    );
}

export default App;

