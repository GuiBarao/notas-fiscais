import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import buscarNotas from "../../services/get/notas-filial.js";

import styles from "./AcordeaoFilial.module.css";
import TabelaNotas from './TabelaNotas/TabelaNotas.js';
import { useState, useEffect } from 'react';
import filtragemNotas from "../../utils/filtragemNotas.js"

function AcordeaoFilial({ filial, valor_teto, filtroDataInicio, filtroDataFim, 
                          filtroTitular, filtroCPF, filtroStatus, filtroNumero,
                          filtroValorMin, filtroValorMax, setEdicaoValorTeto}) {


    const [notas, setNotas] = useState([]);

    const notas_filial = async (filial) => {
        try {
            const response = await buscarNotas(filial);
            setNotas(response);
            
        }   
        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {notas_filial(filial)}, [])
    const notas_filtradas = React.useMemo( () => {return notas.filter(
                                                  (nota) => {return filtragemNotas(nota, filtroTitular, filtroCPF, filtroNumero, filtroValorMin, filtroValorMax, filtroStatus, filtroDataInicio, filtroDataFim)})},
                                                  [notas, filtroDataInicio, filtroDataFim, filtroTitular, filtroCPF, filtroStatus, filtroNumero, filtroValorMin, filtroValorMax])
    
    const desabilitaAcordeao = (notas_filtradas.length === 0);

    const borderColor_acordeao = desabilitaAcordeao? "#000000" : "#006B33";

    const somatorioValores =  React.useMemo(() => 
      {return notas_filtradas.reduce((soma, nota) => soma += nota.valor, 0)},
      [notas_filtradas]);

    const [expanded, setExpanded] = React.useState(false);

    return (
        <Accordion sx = {{borderColor : borderColor_acordeao, borderStyle: "solid"}} 
        className = {`${styles.acordeao} ${desabilitaAcordeao? styles.desabilitado : ""} `}
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
                {`Valor Teto: R$${valor_teto.toFixed(2)}`}
            </Typography>

            <div className = {styles.info_titulo}>
              {desabilitaAcordeao ? 
                <span className={styles.aviso_sem_notas}>* Nenhuma nota foi encontrada.</span> : 

                <div className={styles.info_titulo}>
                  <img src = "/images/somatorio_icon.svg" alt = "icone de somatorio" />
                  {`Valor Total: R$${somatorioValores.toFixed(2)}`}
                </div>}
                  
            </div>
            
            
            
            <img className={styles.edicao} src = "/images/edition.svg" alt = "icone de edicao" 
            onClick={(e) => {
                e.stopPropagation();
                setEdicaoValorTeto(true);
              }}/>
            
            
            
            
          </AccordionSummary>
          <AccordionDetails className={styles.infoAcordeao}>
              
            <TabelaNotas notas = {notas_filtradas}/>

          </AccordionDetails>
        </Accordion>

    );
}

export default AcordeaoFilial;