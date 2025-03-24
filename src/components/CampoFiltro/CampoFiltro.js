import styles from "./CampoFiltro.module.css"
import CampoTexto from "../CampoTexto/CampoTexto.js";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';



import { MultiInputDateRangeField } from '@mui/x-date-pickers-pro/MultiInputDateRangeField';


function CampoFiltro(){
    return (
        <section className = {styles.campo_filtro}>
            <img className = {styles.logo} src = "/images/logo_pax.svg" alt = "logo"/>

            <div className = {styles.filtros_icon_titulo}>
                <img className = {styles.filtro_icon} src = "/images/filtro_icon.svg" alt = "icone do filtro"/>
                <h1 className = {styles.titulo}>Filtros</h1>
            </div>
            
            <div className= {styles.filtros_opcoes}>
                <CampoTexto arquivoIMG={"titular_icon"} titulo={"Nome:"}/>
                <CampoTexto arquivoIMG={"cpf_icon"} titulo={"CPF:"}/>
                <CampoTexto arquivoIMG={"numero_icon"} titulo={"Número:"}/>

                <div className="filtro_data">
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale= "pt-br">
                        <DemoContainer components={['MultiInputDateRangeField']}>

                        <MultiInputDateRangeField autoFocus = {true} format = "DD/MM/YYYY"/>

                        </DemoContainer>
                    </LocalizationProvider>
                </div>


            </div>


        </section>
    );
}

export default CampoFiltro;