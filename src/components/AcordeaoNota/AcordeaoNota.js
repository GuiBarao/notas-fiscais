import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function AcordeaoNota({numero, cpf, titular, data, valor, status}) {
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Numero da nota: {numero}</Typography>
          <Typography component="span">Titular: {titular}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <p> CPF: {cpf}</p>
            <p> Data: {data}</p>
            <p> Valor: R${valor}</p>
            <p> status: {status}</p>
        </AccordionDetails>
      </Accordion>
    );
}

export default AcordeaoNota;