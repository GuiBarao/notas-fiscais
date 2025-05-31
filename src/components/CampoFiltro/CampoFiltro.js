import styles from "./CampoFiltro.module.css"

import CampoTexto from "./CampoTexto/CampoTexto.js";
import FiltroValor from "./FiltroValor/FiltroValor.js";
import FiltroStatus from "./FiltroStatus/FiltroStatus.js"

import {useFiltros} from "../../contexts/FiltrosContext.js"


function CampoFiltro({filtroTitular, filtroCpf, filtroNumero,
        filtroValorMin, filtroValorMax, filtroStatus,
        setFiltroTitular, setFiltroCpf, setFiltroNumero,
        setFiltroValorMin, setFiltroValorMax, setFiltroStatus}){

    return (
        <section className = {styles.campo_filtro}>
            <img className = {styles.logo} src = "/images/logo_pax.svg" alt = "logo"/>
            
            <div className= {styles.filtros_opcoes}>
                <CampoTexto 
                value= {filtroTitular} 
                onChange={(ev) => {setFiltroTitular(ev.target.value);}}
                arquivoIMG={"titular_icon"} titulo={"Nome Titular:"}/>

                <CampoTexto
                value={filtroCpf}
                onChange={(ev) => {setFiltroCpf(ev.target.value);}}
                arquivoIMG={"cpf_icon"} titulo={"CPF:"}/>

                <FiltroStatus 
                value={filtroStatus}
                onChange={(ev) => {setFiltroStatus(ev.target.value);}}/>

                <CampoTexto
                value = {filtroNumero}
                onChange={(ev) => {setFiltroNumero(ev.target.value);}}
                type='number'
                arquivoIMG={"numero_icon"} titulo={"Número:"}/>


                <FiltroValor 
                valueMin={filtroValorMin} 
                onChangeMin={(ev) => {setFiltroValorMin(ev.target.value);}}
                
                valueMax={filtroValorMax} 
                onChangeMax={(ev) => {setFiltroValorMax(ev.target.value);}}
                />


            </div>
            
        </section>
    );
}

export default CampoFiltro;