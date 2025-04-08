import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from "./AcordeaoFilial.module.css";

function format_date(data) {
  let [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

function format_cpf(cpf)
{

  return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11);
}

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
              

              <table className={styles.tabela}>
                <thead>
                  <tr>
                    <th className={styles.label}>Titular</th>
                    <th className={styles.label}>Número</th>
                    <th className={styles.label}>Data</th>
                    <th className={styles.label}>Valor</th>
                    <th className={styles.label}>CPF</th>
                    <th className={styles.label}>Status</th>
                  </tr>
                </thead>

                <tbody>

                    {notas.map((nota) => 
                      <tr className={styles.info_wrapper}>
                          <td><p className={styles.info}>{nota.titular} </p></td>
                          <td><p className={styles.info}>{nota.numero}</p> </td>
                          <td><p className={styles.info}>{format_date(nota.data)}</p> </td>
                          <td><p className={styles.info}>{nota.valor}</p> </td>
                          <td><p className={styles.info}>{format_cpf(nota.cpf)}</p> </td>
                          <td><p className={styles.info}>{nota.status? "Válido" : "Inválido"}</p></td>
                      </tr>



                      )}


                </tbody>
              </table>

              

          </AccordionDetails>
        </Accordion>

    );
}

export default AcordeaoFilial;