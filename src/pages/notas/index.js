import AcordeaoFilial from "../../components/AcordeaoFilial/AcordeaoFilial.js";
import CampoFiltro from "../../components/CampoFiltro/CampoFiltro.js"
import styles from "./styles.css";
import Cabecalho from "../../components/Cabecalho/Cabecalho.js";
import dayjs from 'dayjs';
import { useFiltros } from "../../contexts/FiltrosContext.js";
import { useState, useEffect } from "react";
import buscaFiliais from "../../services/get/filiais-disponiveis.js"


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

function NFSE() {



    const { filtroTitular, filtroCpf, filtroNumero,
            filtroValorMin, filtroValorMax, filtroStatus,
            filtroFiliais, filtroDataInicio, filtroDataFim,
            setFiltroFiliais, setFiltroDataInicio, setFiltroDataFim
        } = useFiltros();

    const lowerNomeTitular = filtroTitular.toLowerCase(); 

    const [filiais, setFiliais] = useState([]);

    const filiais_disponiveis = async () => {
        try {
            const response = await buscaFiliais();
            setFiliais(response);
        }
        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {filiais_disponiveis()}, []);   

    
    const filiaisFiltradas = filiais.filter((filial) => filtroFiliais.includes(filial.nomeFilial));

    return (
        
        <section className={styles.notas}>
            
            <CampoFiltro />
            
            <div className={styles.header_filtros_wrapper}>
                
                <Cabecalho filiais = {filiais} filtroFiliaisValue = {filtroFiliais} filtroFiliaisOnChange={setFiltroFiliais}
                dataInicioValue = {filtroDataInicio} dataInicioOnChange = {setFiltroDataInicio} 
                dataFimValue = {filtroDataFim} dataFimOnChange = {setFiltroDataFim}/>

                <div className={styles.accordions}>
                    {filiaisFiltradas.map( (filial) => {

                        return <AcordeaoFilial filial={filial.nomeFilial} valor_teto={filial.valorTeto} key={filial.nomeFilial}/>
                    })}
                </div>

            </div>

        </section>
    );
}

export default NFSE;

