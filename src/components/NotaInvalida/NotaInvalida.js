import TituloAccordionNota from "../TituloAccordionNota/TituloAccordionNota";
import CorpoAccordionNota from "../CorpoAccordionNota/CorpoAccordionNota";
import { useState } from "react";
import TableBody from '@mui/material/TableBody';


function NotaInvalida({nota}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <TableBody>

            <TituloAccordionNota {...nota} setValueIsOpen={setIsOpen} valueIsOpen={isOpen}/>

            {isOpen && <CorpoAccordionNota  erro = {nota.erro}/>}
            

        </TableBody>
        
        
        
    );
}

export default NotaInvalida;