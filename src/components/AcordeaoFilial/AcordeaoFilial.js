import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from "./AcordeaoFilial.module.css";

import AcordeaoNota from '../AcordeaoNota/AcordeaoNota';


function AcordeaoFilial({ filial, valor_teto, notas}) {


    /*Componentização das notas*/ 
    let lista_componentesNotas = notas.map((nota) => <AcordeaoNota {...nota} key={nota.numero}/>);

    let desabilitaAcordeao = (notas.length === 0);

    let borderColor_acordeao = desabilitaAcordeao? "#000000" : "#006B33" ;

    return (
        <Accordion sx = {{borderColor : borderColor_acordeao, borderStyle: "solid"}} 
        className = {styles.acordeao} disabled = {desabilitaAcordeao}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx = {{color : "#ffffff"}}/>}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography  className={styles.titulo_acordeao} component="span">
              
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
              
              {lista_componentesNotas}

            </section>
          </AccordionDetails>
        </Accordion>

    );
}

export default AcordeaoFilial;