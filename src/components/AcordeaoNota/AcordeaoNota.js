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

function format_date(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

function AcordeaoNota({numero, cpf, titular, data, valor, status}) {
    let status_formatado = format_status(status);
    let data_formatada = format_date(data);

    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">{numero}</Typography>
          <Typography component="span">Titular: {titular}</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <table>
            <tr>            
              <td> CPF: {cpf}</td>
              <td> Data: {data_formatada}</td>
            </tr>
            <tr>
              <td> Valor: R${valor}</td>
              <td> Status: {status_formatado}</td>
            </tr>
          </table>

          
        </AccordionDetails>
      </Accordion>
    );
}

export default AcordeaoNota;