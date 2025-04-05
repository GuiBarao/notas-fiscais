import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import styles from "./AcordeaoNota.module.css";

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
          aria-controls="panel3-content"
          id="panel3-header"
        >

          <Typography className={styles.info_wrapper} component="span">

              
              
              <div className={styles.info_wrapper}>
                <span className={styles.info}>{titular}</span>
                <span className={styles.info}>{numero}</span>
                <span className={styles.info}>{format_date(data)}</span>
                <span className={styles.info}>{`R$${valor},00`}</span>
                <span className={styles.info}>{format_cpf(cpf)}</span>
                <span className={styles.info}>{"Inválido"}</span>
              </div>
              
              
              

          </Typography>


        </AccordionSummary>
        <AccordionDetails className={styles.details}>

            <InfoErro {...erro}/>
          
        </AccordionDetails>
      </Accordion>
    );
}

export default AcordeaoNota;