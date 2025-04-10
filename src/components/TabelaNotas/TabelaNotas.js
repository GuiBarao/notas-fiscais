import Nota from "../Nota/Nota.js"
import styles from "./TabelaNotas.module.css"
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
function TabelaNotas({notas}) {


    return (
    <TableContainer className={styles.tabela}>
       <Table >
        <TableHead>
          <TableRow>
            <TableCell className={styles.label}>Titular</TableCell>
            <TableCell className={styles.label}>Número</TableCell>
            <TableCell className={styles.label}>Data</TableCell>
            <TableCell className={styles.label}>Valor</TableCell>
            <TableCell className={styles.label}>CPF</TableCell>
            <TableCell className={styles.label}>Status</TableCell>
            <TableCell className={styles.label}></TableCell>
          </TableRow>
        </TableHead>
          
            {notas.map((nota) => <Nota {...nota}/>)}
        
     

        </Table>
      </TableContainer>
    );
}

export default TabelaNotas;
