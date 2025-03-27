import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CampoStatus from '../CampoStatus/CampoStatus.js';

import styles from "./AcordeaoNota.module.css";

import InfoNota from '../InfoNota/InfoNota.js';
import InfoErro from '../InfoErro/InfoErro.js';

function format_date(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

function format_cpf(cpf)
{

    return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11);
}

function AcordeaoNota({numero, cpf, titular, data, valor, status, erro}) {

    return (
        <Accordion className={styles.acordeao}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx = {{color : "#ffffff", width: "24px", height: "24px"}}/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >

          <Typography component="span" className = {styles.nome_titular}>
            
            <img src = "/images/titular_icon.svg" alt = "Icone Pessoa" />
            <strong>{titular}</strong>
            
          </Typography>


        </AccordionSummary>
        <AccordionDetails className={styles.details}>

            <div className={styles.tabela_campoStatus_wrapper}>
              <table>
                <tr>
                <td><InfoNota nomeInfo = {"Número"} arquivoIMG = {"numero_icon"} altIMG = {"Icone do numero"} info = {numero} largura = {284}/></td>
                <td><InfoNota nomeInfo = {"Data"} arquivoIMG = {"data_icon"} altIMG = {"Icone da data"} info = {format_date(data)} largura = {146}/></td>
                </tr>

                <tr>
                <td><InfoNota nomeInfo = {"Valor"} arquivoIMG = {"valor_icon"} altIMG = {"Icone do valor"} info = {`R$${valor},00`} largura = {284}/></td>
                <td><InfoNota nomeInfo = {"CPF"} arquivoIMG = {"cpf_icon"} altIMG = {"Icone do CPF"} info = {format_cpf(cpf)} largura = {146}/></td>
                </tr>
              </table>

              <CampoStatus status={status}/>
            </div>

            {!status? <InfoErro {...erro}/> : null}
          
        </AccordionDetails>
      </Accordion>
    );
}

export default AcordeaoNota;