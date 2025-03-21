import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import AcordeaoNota from './AcordeaoNota';

function AcordeaoFilial() {
    return (
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">Filial     Valor Teto: </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AcordeaoNota />
          </AccordionDetails>
        </Accordion>

    );
}

export default AcordeaoFilial;