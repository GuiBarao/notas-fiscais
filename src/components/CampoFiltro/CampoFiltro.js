import styles from "./CampoFiltro.module.css"
import CampoTexto from "../CampoTexto/CampoTexto.js";


import FiltroValor from "../FiltroValor/FiltroValor.js";
import FiltroStatus from "../FiltroStatus/FiltroStatus.js"

function CampoFiltro(){
    return (
        <section className = {styles.campo_filtro}>
            <img className = {styles.logo} src = "/images/logo_pax.svg" alt = "logo"/>

            <div className = {styles.filtros_icon_titulo}>
                <img className = {styles.filtro_icon} src = "/images/filtro_icon.svg" alt = "icone do filtro"/>
                <h1 className = {styles.titulo}>Filtros</h1>
            </div>
            
            <div className= {styles.filtros_opcoes}>
                <CampoTexto arquivoIMG={"titular_icon"} titulo={"Nome Titular:"}/>
                <CampoTexto arquivoIMG={"cpf_icon"} titulo={"CPF:"}/>
                <CampoTexto arquivoIMG={"numero_icon"} titulo={"Número:"}/>

                <FiltroValor/>

                <FiltroStatus />

            </div>


        </section>
    );
}

export default CampoFiltro;