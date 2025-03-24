import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from "./AcordeaoFilial.module.css";

import AcordeaoNota from '../AcordeaoNota/AcordeaoNota';

function filtro(nota) {

  if(nota.valor > 500 || nota.titular === "Diogo Ferreira")
  {
      return false;
  }

  return <AcordeaoNota {...nota} key = {nota.numero} /> 
}

function AcordeaoFilial({filial, valor_teto, notas}) {
    return (
        <Accordion className = {styles.acordeao}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography className={styles.titulo_acordeao} component="span">
              
              <div className = {styles.filial}>
                <img src = "/images/local_icon.svg" alt = "icone de local"/>
                <p> {filial} </p>
              </div>

              <div className = {styles.valor_teto}>
              <img src = "/images/dolar_icon.svg" alt = "icone de dolar"/>
              <p> Valor Teto: R${valor_teto},00</p>
              </div>

              </Typography>
            
            
          </AccordionSummary>
          <AccordionDetails>
            <section>
              
              {notas.map ((nota) => {
                return filtro(nota);
              })}
              
            </section>
          </AccordionDetails>
        </Accordion>

    );
}

export default AcordeaoFilial;