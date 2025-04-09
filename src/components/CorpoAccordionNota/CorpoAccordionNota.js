import InfoErro from "../InfoErro/InfoErro.js"
import styles from "./CorpoAccordionNota.module.css"
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function CorpoAccordionNota ({erro})
{
    return (
        <TableRow className={styles.corpo_accordion}>
            <TableCell className={styles.erro} colSpan={7}>
                <InfoErro {...erro}/>
            </TableCell>
        </TableRow>
    );
}

export default CorpoAccordionNota;