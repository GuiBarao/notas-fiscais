import Nota from "./Nota/index.js"
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function TabelaNotas({notas}) {
    const sx_tableCell = {
      color:"primary.text",
      fontWeight: "500",
      padding:"15px",
      textAlign:"center",
      fontSize:"20px"
    }

    return (
    <TableContainer sx={{borderStyle:"hidden", borderRadius:"14px"}}>
       <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={sx_tableCell}>Titular</TableCell>
            <TableCell sx={sx_tableCell}>Número</TableCell>
            <TableCell sx={sx_tableCell}>Data</TableCell>
            <TableCell sx={sx_tableCell}>Valor</TableCell>
            <TableCell sx={sx_tableCell}>CPF</TableCell>
            <TableCell sx={sx_tableCell}>Status</TableCell>
            <TableCell sx={sx_tableCell}></TableCell>
          </TableRow>
        </TableHead>

            {notas.map((nota, index) => <Nota key={index} 
                                              numero={nota.id}
                                              data={nota.data_cadastro}
                                              valor={nota.valor}
                                              status={nota.status}
                                              erro={nota.erro}
                                              cliente={nota.cliente}/> )}
        
     

        </Table>
      </TableContainer>
    );
}

export default TabelaNotas;
