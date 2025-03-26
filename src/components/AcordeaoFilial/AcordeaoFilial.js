import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from "./AcordeaoFilial.module.css";

import AcordeaoNota from '../AcordeaoNota/AcordeaoNota';
import { type } from '@testing-library/user-event/dist/type';

function filtragem(nota, filtroNomeTitular, filtroCPF, filtroNumero, filtroValorMin, 
  filtroValorMax, filtroStatusValido, filtroStatusInvalido) {

  if( !nota.titular.toLowerCase().includes(filtroNomeTitular) && filtroNomeTitular !== "")
  {
      return false;
  }

  if(nota.cpf !== filtroCPF && filtroCPF !== "")
  {
      return false;
  }

  if(nota.numero !== filtroNumero && filtroNumero !== "")
  {
      return false;
  }

  
  if (nota.valor < parseInt(filtroValorMin) && filtroValorMin !== "" )
  {
      return false;
  }
  
  if (nota.valor > parseInt(filtroValorMax))
  {
      return false;
  }
  
  if(!filtroStatusValido && !filtroStatusInvalido)
  {
    return false;
  }

  if ((filtroStatusValido && !nota.status) && !filtroStatusInvalido)
  {
      return false;
  }

  if ((filtroStatusInvalido && nota.status) && !filtroStatusValido)
  {
      return false;
  }


  return true;
}


function AcordeaoFilial({ filial, valor_teto, notas, filtroNomeTitular, filtroCPF, 
                          filtroNumero, filtroValorMin, filtroValorMax,
                          filtroStatusValido, filtroStatusInvalido}) {

    /*Normalização do filtro de nome do titular*/
    const lowerNomeTitular = filtroNomeTitular.toLowerCase(); 


    /*Filtragem das notas*/ 
    let lista_acordeaoNotaFiltrados = notas.filter((nota) => filtragem( nota, lowerNomeTitular, 
                                                                        filtroCPF, filtroNumero, 
                                                                        filtroValorMin, filtroValorMax,
                                                                        filtroStatusValido, filtroStatusInvalido));

    /*Componentização das notas*/ 
    let lista_componentesNotas = lista_acordeaoNotaFiltrados.map((nota) => <AcordeaoNota {...nota}/>);

    let desabilitaAcordeao = (lista_acordeaoNotaFiltrados.length === 0);

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