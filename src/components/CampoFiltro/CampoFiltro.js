import styles from "./CampoFiltro.module.css"
import CampoTexto from "../CampoTexto/CampoTexto.js";


import FiltroValor from "../FiltroValor/FiltroValor.js";
import FiltroStatus from "../FiltroStatus/FiltroStatus.js"
import SubmeterFiltragem from "../SubmeterFiltragem/SubmeterFiltragem.js";
import { useState } from "react";


function CampoFiltro({onFiltrarNome, onFiltrarCPF, onFiltrarNumero, 
                        onFiltrarValorMin, onFiltrarValorMax, 
                        onFiltrarStatusValido, onFiltrarStatusInvalido}){

    const [filtroNomeTitular, setFiltroNomeTitular] = useState("");
    const [filtroCPF, setFiltroCPF] = useState("");
    const [filtroNumero, setFiltroNumero] = useState("");

    const [filtroValorMin, setFiltroValorMin] = useState("");
    const [filtroValorMax, setFiltroValorMax] = useState("");

    const [filtroStatusValido, setFiltroStatusValido] = useState(true);
    const [filtroStatusInvalido, setFiltroStatusInvalido] = useState(true);
    
    const aplicarFiltros = () => {
        onFiltrarNome(filtroNomeTitular);
        onFiltrarCPF(filtroCPF);
        onFiltrarNumero(filtroNumero);
        onFiltrarValorMin(filtroValorMin);
        onFiltrarValorMax(filtroValorMax);
        onFiltrarStatusValido(filtroStatusValido);
        onFiltrarStatusInvalido(filtroStatusInvalido);
    }
 
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
                onChange={(ev) => {setFiltroNomeTitular(ev.target.value);}}
                arquivoIMG={"titular_icon"} titulo={"Nome Titular:"}/>

                <CampoTexto
                value={filtroCPF}
                onChange={(ev) => {setFiltroCPF(ev.target.value);}}
                type='number'
                arquivoIMG={"cpf_icon"} titulo={"CPF:"}/>

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

                <FiltroStatus 
                valueValido={filtroStatusValido}
                onChangeValido={(ev) => {setFiltroStatusValido(ev.target.checked);}}

                valueInvalido={filtroStatusInvalido}
                onChangeInvalido={(ev) => {setFiltroStatusInvalido(ev.target.checked);}}
                />
            </div>

            <SubmeterFiltragem onClick = {aplicarFiltros}/>
            
        </section>
    );
}

export default CampoFiltro;