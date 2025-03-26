import styles from "./CampoFiltro.module.css"
import CampoTexto from "../CampoTexto/CampoTexto.js";


import FiltroValor from "../FiltroValor/FiltroValor.js";
import FiltroStatus from "../FiltroStatus/FiltroStatus.js"
import { useState } from "react";


function CampoFiltro({onFiltrarNome, onFiltrarCPF, onFiltrarNumero}){

    const [filtroNomeTitular, setFiltroNomeTitular] = useState("");
    const [filtroCPF, setFiltroCPF] = useState("");
    const [filtroNumero, setFiltroNumero] = useState("");

 
    return (
        <section className = {styles.campo_filtro}>
            <img className = {styles.logo} src = "/images/logo_pax.svg" alt = "logo"/>

            <div className = {styles.filtros_icon_titulo}>
                <img className = {styles.filtro_icon} src = "/images/filtro_icon.svg" alt = "icone do filtro"/>
                <h1 className = {styles.titulo}>Filtros</h1>
            </div>
            
            <div className= {styles.filtros_opcoes}>
                <CampoTexto 
                value= {filtroNomeTitular} 
                onChange={(ev) => {setFiltroNomeTitular(ev.target.value); onFiltrarNome(ev.target.value);}}
                arquivoIMG={"titular_icon"} titulo={"Nome Titular:"}/>

                <CampoTexto
                value={filtroCPF}
                onChange={(ev) => {setFiltroCPF(ev.target.value); onFiltrarCPF(ev.target.value);}}
                arquivoIMG={"cpf_icon"} titulo={"CPF:"}/>

                <CampoTexto
                value = {filtroNumero}
                onChange={(ev) => {setFiltroNumero(ev.target.value); onFiltrarNumero(ev.target.value)}}
                
                arquivoIMG={"numero_icon"} titulo={"Número:"}/>

                <FiltroValor/>

                <FiltroStatus />

            </div>


        </section>
    );
}

export default CampoFiltro;