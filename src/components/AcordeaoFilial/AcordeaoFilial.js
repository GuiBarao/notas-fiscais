import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from "./AcordeaoFilial.module.css";
import TabelaNotas from '../TabelaNotas/TabelaNotas';

function AcordeaoFilial({ filial, valor_teto, notas}) {

    let desabilitaAcordeao = (notas.length === 0);

    let borderColor_acordeao = desabilitaAcordeao? "#000000" : "#006B33";

    let somatorioValores = notas.reduce((soma, nota) => soma += parseFloat(nota.valor), 0);

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

              {!desabilitaAcordeao && <p>Valor Total: R${somatorioValores},00</p>}

              {desabilitaAcordeao && <p>* Nenhuma nota foi encontrada.</p>}

            </Typography>
            
            
          </AccordionSummary>
          <AccordionDetails className={styles.infoAcordeao}>
              
            <TabelaNotas notas = {notas}/>

          </AccordionDetails>
        </Accordion>

    );
}

export default AcordeaoFilial;