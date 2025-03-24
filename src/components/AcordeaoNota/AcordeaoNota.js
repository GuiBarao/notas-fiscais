import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AcordeaoErro from '../AcordeaoErro/AcordeaoErro.js';


import styles from "./AcordeaoNota.module.css";

import InfoNota from '../InfoNota/InfoNota.js';

function format_date(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

function AcordeaoNota({numero, cpf, titular, data, valor, status, erro}) {

    return (
        <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >

          <Typography component="span">
            
            <img src = "/images/titular_icon.svg" alt = "Icone Pessoa" />
            {titular}
            
            
            </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          
            <table>
              <tr>
              <td><InfoNota nomeInfo = {"Número"} arquivoIMG = {"numero_icon"} altIMG = {"Icone do numero"} infoTexto = {numero}/></td>
              <td><InfoNota nomeInfo = {"Data"} arquivoIMG = {"data_icon"} altIMG = {"Icone da data"} infoTexto = {format_date(data)}/></td>
              </tr>

              <tr>
              <td><InfoNota nomeInfo = {"Valor"} arquivoIMG = {"valor_icon"} altIMG = {"Icone do valor"} infoTexto = {valor}/></td>
              <td><InfoNota nomeInfo = {"CPF"} arquivoIMG = {"cpf_icon"} altIMG = {"Icone do CPF"} infoTexto = {cpf}/></td>
              </tr>
            </table>
  

          <AcordeaoErro status={status} {...erro}/>

          
        </AccordionDetails>
      </Accordion>
    );
}

export default AcordeaoNota;