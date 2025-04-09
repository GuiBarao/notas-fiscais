import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from "./AcordeaoFilial.module.css";
import TabelaNotas from '../TabelaNotas/TabelaNotas';


function AcordeaoFilial({ filial, valor_teto, notas}) {

    const desabilitaAcordeao = (notas.length === 0);

    const borderColor_acordeao = desabilitaAcordeao? "#000000" : "#006B33";

    const somatorioValores =  React.useMemo(() => 
      {return notas.reduce((soma, nota) => soma += parseFloat(nota.valor), 0)},
      [notas]);

    const [expanded, setExpanded] = React.useState(false);

    return (
        <Accordion sx = {{borderColor : borderColor_acordeao, borderStyle: "solid"}} 
        className = {styles.acordeao} 
        disabled = {desabilitaAcordeao}
        expanded = {!desabilitaAcordeao && expanded}
        onChange={() => setExpanded(!expanded)}
        >
          
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx = {{color : "#ffffff"}}/>}
            aria-controls="panel3-content"
            id="panel3-header"
            className={styles.titulo_acordeao}
          >
            <Typography className = {styles.info_titulo}>
                <img src = "/images/local_icon.svg" alt = "icone de local"/>
                {filial} 
            </Typography>

            <Typography className = {styles.info_titulo}>
                <img src = "/images/dolar_icon.svg" alt = "icone de dolar"/>
                {`Valor Teto: R$${valor_teto},00`}
            </Typography>

            <Typography className = {styles.info_titulo}>
              {desabilitaAcordeao ? 
                "* Nenhuma nota foi encontrada." : 

                <div className={styles.info_titulo}>
                  <img src = "/images/somatorio_icon.svg" alt = "icone de somatorio" />
                  {`Valor Total: R$${somatorioValores},00`}
                </div>}
                  
            </Typography>
            
            
          </AccordionSummary>
          <AccordionDetails className={styles.infoAcordeao}>
              
            <TabelaNotas notas = {notas}/>

          </AccordionDetails>
        </Accordion>

    );
}

export default AcordeaoFilial;