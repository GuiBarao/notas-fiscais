import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">{filial}</Typography>
            
            
          </AccordionSummary>
          <AccordionDetails>
            <p>Valor Teto: R${valor_teto},00</p>
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