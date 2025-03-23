import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function format_status(status_bool) {
  let status_txt = "Válido";

  if(!status_bool) {
    status_txt = "Inválido";
  }

  return status_txt;
}

function AcordeaoErro ({status, mensagem, log}) {
    return (
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">
                <h1> Status </h1>
                <h2> {format_status(status)} </h2>
            </Typography>
            
            
          </AccordionSummary>
          <AccordionDetails>
            <p>Mensagem: {mensagem}</p>
            <p>Log: {log}</p>
          </AccordionDetails>
        </Accordion>
    );
}

export default AcordeaoErro;