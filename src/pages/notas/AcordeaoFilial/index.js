import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import buscarNotas from "../../../services/get/notas-filial.js";
import TabelaNotas from './TabelaNotas/index.js';
import { useState, useEffect } from 'react';
import filtragemNotas from "../../../utils/filtragemNotas.js"

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

    

    const somatorioValores =  React.useMemo(() => 
      {return notas_filtradas.reduce((soma, nota) => soma += nota.valor, 0)},
      [notas_filtradas]);

    const [expanded, setExpanded] = React.useState(false);

    const sx_accordion = {
        bgcolor: "primary.main",
        marginLeft:"20px",
        marginRight:"20px"
        
    }

    if (desabilitaAcordeao) { 
      sx_accordion.borderColor = "destaqueNotaInvalida.main";
      sx_accordion.opacity = "0.6";

    }

    const sx_summary = {
        display : "flex",
        flexDirection: "row",
        width: "100%",
        height: "40px",
        margin: "0px"
    }

    const sx_typography = {
      display : "flex",
      flex: "1",
      fontWeight: "700",
      color: "primary.text",
      justifyContent: "center"
    }

    return (
        <Accordion sx = {sx_accordion} 
        expanded = {!desabilitaAcordeao && expanded}
        onChange={() => setExpanded(!expanded)}
        >
          
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx = {{color : "#ffffff"}}/>}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={sx_summary}
          >


            <Typography sx = {sx_typography}>
                <img src = "/images/local_icon.svg" alt = "icone de local"/>
                {filial} 
            </Typography>

            <Typography  sx = {sx_typography}>
                <img src = "/images/dolar_icon.svg" alt = "icone de dolar"/>
                {`Valor Teto: R$${valor_teto.toFixed(2)}`}
            </Typography>

            <Typography  sx = {sx_typography}>
              {desabilitaAcordeao ? 
                <span className="text-red-800 opacity-100">* Nenhuma nota foi encontrada.</span> :

                <Box sx={sx_typography}>
                  <img src = "/images/somatorio_icon.svg" alt = "icone de somatorio" />
                  {`Valor Total: R$${somatorioValores.toFixed(2)}`}
                </Box>}
                  
            </Typography>
            
            
            
            <img className="cursor-pointer rounded-xl" src = "/images/edition.svg" alt = "icone de edicao" 
            onClick={(e) => {
                e.stopPropagation();
                
                setEdicaoValorTeto({ativado : true, nome_filial: filial});
              }}/>
            
            
            
            
          </AccordionSummary>
          <AccordionDetails className="flex flex-col ">
              
            <TabelaNotas notas = {notas_filtradas}/>

          </AccordionDetails>
        </Accordion>

    );
}

export default AcordeaoFilial;