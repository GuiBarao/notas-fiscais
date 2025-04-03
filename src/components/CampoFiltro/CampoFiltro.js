import styles from "./CampoFiltro.module.css"
import CampoTexto from "../CampoTexto/CampoTexto.js";


import FiltroValor from "../FiltroValor/FiltroValor.js";
import FiltroStatus from "../FiltroStatus/FiltroStatus.js"
import { useState } from "react";


function CampoFiltro({onFiltrarNome, onFiltrarCPF, onFiltrarNumero, 
                        onFiltrarValorMin, onFiltrarValorMax, 
                        onFiltrarStatus}){

    const [filtroNomeTitular, setFiltroNomeTitular] = useState("");
    const [filtroCPF, setFiltroCPF] = useState("");
    const [filtroNumero, setFiltroNumero] = useState("");

    const [filtroValorMin, setFiltroValorMin] = useState("");
    const [filtroValorMax, setFiltroValorMax] = useState("");

    const [filtroStatus, setFiltroStatus] = useState("");

 
    return (
        <section className = {styles.campo_filtro}>
            <img className = {styles.logo} src = "/images/logo_pax.svg" alt = "logo"/>
            
            <div className= {styles.filtros_opcoes}>
                <CampoTexto 
                value= {filtroNomeTitular} 
                onChange={(ev) => {setFiltroNomeTitular(ev.target.value); onFiltrarNome(ev.target.value);}}
                arquivoIMG={"titular_icon"} titulo={"Nome Titular:"}/>

                <CampoTexto
                value={filtroCPF}
                onChange={(ev) => {setFiltroCPF(ev.target.value); onFiltrarCPF(ev.target.value);}}
                type='number'
                arquivoIMG={"cpf_icon"} titulo={"CPF:"}/>

                <FiltroStatus 
                value={filtroStatus}
                onChange={(ev) => {setFiltroStatus(ev.target.value); onFiltrarStatus(ev.target.value);}}/>

                <CampoTexto
                value = {filtroNumero}
                onChange={(ev) => {setFiltroNumero(ev.target.value);onFiltrarNumero(ev.target.value);}}
                type='number'
                arquivoIMG={"numero_icon"} titulo={"Número:"}/>


                <FiltroValor 
                valueMin={filtroValorMin} 
                onChangeMin={(ev) => {setFiltroValorMin(ev.target.value); onFiltrarValorMin(ev.target.value);}}
                
                valueMax={filtroValorMax} 
                onChangeMax={(ev) => {setFiltroValorMax(ev.target.value); onFiltrarValorMax(ev.target.value);}}
                />


            </div>
            
        </section>
    );
}

export default CampoFiltro;