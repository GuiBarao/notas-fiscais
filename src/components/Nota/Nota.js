import styles from "./Nota.module.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {useState} from "react";
import TableBody from '@mui/material/TableBody';
import Collapse from '@mui/material/Collapse';
import InfoErro from "../InfoErro/InfoErro.js";

function format_date(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

function format_cpf(cpf)
{

    return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11);
}


function Nota({numero, cpf, titular, data, valor, status, erro}) {

    const [isOpen, setIsOpen] = useState(false);
    const angulo_expandIcon = isOpen? 180 : 0;
    
    
    return (
        <TableBody >
            <TableRow   onClick = {() => {if(!status) {setIsOpen(!isOpen)}}} 
                        className={status ? styles.nota_valida : styles.nota_invalida}
                        >

                    <TableCell className={styles.typograph}>{titular} </TableCell>
                    <TableCell className={styles.typograph}>{numero} </TableCell>
                    <TableCell className={styles.typograph}>{format_date(data)} </TableCell>
                    <TableCell className={styles.typograph}>{valor} </TableCell>
                    <TableCell className={styles.typograph}>{format_cpf(cpf)} </TableCell>
                    <TableCell className={styles.typograph}>{status? "Válido" : "Inválido"}</TableCell>

                    {!status ? 
                        <TableCell className={styles.typograph}>
                            <ExpandMoreIcon sx={{transform : `rotate(${angulo_expandIcon}deg)`}} 
                                className={styles.expand_icon}/>
                        </TableCell> : <TableCell className={styles.typograph}></TableCell> }                       
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