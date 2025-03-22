import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import AcordeaoNota from '../AcordeaoNota/AcordeaoNota';

import styles from "./AcordeaoFilial.module.css"

import filiais from "../../json/db.json" 

function AcordeaoFilial({filial, valor_teto}) {
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
            <p>ValorTeto: R${valor_teto},00</p>
            <section>
              {
                  filiais.map( (filial) => {

                        return filial.notas.map ((nota) => {
                        return <AcordeaoNota {...nota} key = {nota.numero} />
                      })
                  }

              )}
            </section>
          </AccordionDetails>
        </Accordion>

    );
}

export default AcordeaoFilial;