import TituloAccordionNota from "../TituloAccordionNota/TituloAccordionNota";
import { useState } from "react";
import TableBody from '@mui/material/TableBody';
import Collapse from '@mui/material/Collapse';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import InfoErro from "../InfoErro/InfoErro.js";

function NotaInvalida({nota}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <TableBody>

            <TituloAccordionNota {...nota} setValueIsOpen={setIsOpen} valueIsOpen={isOpen}/>


            <TableRow>

                <TableCell sx={{padding : "0px"}} colSpan={7}>

                    <Collapse in={isOpen} timeout="auto" unmountOnExit>

                        <InfoErro {...nota.erro}/>

                    </Collapse>

                </TableCell>

            </TableRow>
            

        </TableBody>
        
        
        
    );
}

export default NotaInvalida;