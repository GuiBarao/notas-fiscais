import styles from "./NotaValida.module.css"
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

function NotaValida ({numero, cpf, titular, data, valor, status}) {
    return (

              <TableRow className={styles.info_wrapper}>
                  <TableCell className={styles.info}>{titular} </TableCell>
                  <TableCell className={styles.info}>{numero} </TableCell>
                  <TableCell className={styles.info}>{format_date(data)} </TableCell>
                  <TableCell className={styles.info}>{valor} </TableCell>
                  <TableCell className={styles.info}>{format_cpf(cpf)} </TableCell>
                  <TableCell className={styles.info}>{status? "Válido" : "Inválido"}</TableCell>                          
                  <TableCell className={styles.info}></TableCell>                          
              </TableRow> 
    );
}

export default NotaValida;