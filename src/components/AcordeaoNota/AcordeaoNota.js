import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AcordeaoErro from '../AcordeaoErro/AcordeaoErro.js';


function format_date(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

function AcordeaoNota({numero, cpf, titular, data, valor, status, erro}) {
    let data_formatada = format_date(data);

    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >

          <Typography component="span">{titular}</Typography>
        </AccordionSummary>
        <AccordionDetails>

          
          <table>
            <tr> <h1>{titular}</h1></tr>
            <tr>            
              <td> Nº da nota: {numero}</td>
              <td> Data: {data_formatada}</td>
            </tr>
            <tr>
              <td> Valor: R${valor}</td>
              <td> CPF: {cpf}</td>
                  
            </tr>
          </table>

          <AcordeaoErro status={status} {...erro}/>

          
        </AccordionDetails>
      </Accordion>
    );
}

export default AcordeaoNota;