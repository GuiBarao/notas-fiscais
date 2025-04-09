import styles from "./TituloAccordionNota.module.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function format_date(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

function format_cpf(cpf)
{

    return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11);
}


function TituloAccordionNota({numero, cpf, titular, data, valor, status, setValueIsOpen, valueIsOpen}) {

    const angulo_expandIcon = valueIsOpen? 180 : 0;
    
    return (
        

        <TableRow onClick = {() => setValueIsOpen(!valueIsOpen)} className={styles.summary}>
                  <TableCell className={styles.typograph}>{titular} </TableCell>
                  <TableCell className={styles.typograph}>{numero} </TableCell>
                  <TableCell className={styles.typograph}>{format_date(data)} </TableCell>
                  <TableCell className={styles.typograph}>{valor} </TableCell>
                  <TableCell className={styles.typograph}>{format_cpf(cpf)} </TableCell>
                  <TableCell className={styles.typograph}>{status? "Válido" : "Inválido"}</TableCell>
                  <TableCell className={styles.typograph}><ExpandMoreIcon sx={{transform : `rotate(${angulo_expandIcon}deg)`}} className={styles.expand_icon}/></TableCell>                         
        </TableRow> 
        
      
        
    );
}

export default TituloAccordionNota;