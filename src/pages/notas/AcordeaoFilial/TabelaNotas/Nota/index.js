import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {useState} from "react";
import TableBody from '@mui/material/TableBody';
import Collapse from '@mui/material/Collapse';
import InfoErro from "./InfoErro/index.js";
import format_date from "../../../../../utils/format.js"



function Nota({numero, data, valor, status, erro, cliente}) {

    const [isOpen, setIsOpen] = useState(false);
    const angulo_expandIcon = isOpen? 180 : 0;


    const sx_typograph = {
        textAlign:"center",
        fontSize:"15px",
        color: "text.secondary",
        fontWeight:"550",
        borderBottom: "none",
        padding: "8px"
    }
    
    return (
        <TableBody >
            <TableRow   onClick = {() => {if(!status) {setIsOpen(!isOpen)}}} 
                        sx={!status && {cursor: "pointer"}}>
                    <TableCell sx={sx_typograph}>{cliente.nome} </TableCell>
                    <TableCell sx={sx_typograph}>{numero} </TableCell>
                    <TableCell sx={sx_typograph}>{format_date(data)} </TableCell>
                    <TableCell sx={sx_typograph}>{valor} </TableCell>
                    <TableCell sx={sx_typograph}>{cliente.cpf_cnpj} </TableCell>
                    <TableCell sx={sx_typograph}>{status? "Válido" : "Inválido"}</TableCell>

                    {!status ? 
                        <TableCell sx={sx_typograph}>
                            <ExpandMoreIcon sx={{transform : `rotate(${angulo_expandIcon}deg)`,  color:"icon.secondary" }}/>
                        </TableCell> : <TableCell sx={sx_typograph}></TableCell> }                       
            </TableRow> 

            <TableRow>

                <TableCell sx={{padding : "0px"}} colSpan={7}>

                    <Collapse in={isOpen} timeout="auto" unmountOnExit>

                        <InfoErro {...erro}/>

                    </Collapse>

                </TableCell>

            </TableRow>

        </TableBody>   
    );
}

export default Nota;