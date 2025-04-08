import TituloAccordionNota from "../TituloAccordionNota/TituloAccordionNota";
import CorpoAccordionNota from "../CorpoAccordionNota/CorpoAccordionNota";
import styles from "./NotaInvalida.module.css"
import { useState } from "react";


function NotaInvalida({nota}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <tbody>

            <TituloAccordionNota className={styles.titulo} {...nota} setValueIsOpen={setIsOpen} valueIsOpen={isOpen}/>

            {isOpen && <CorpoAccordionNota  className={styles.corpo} erro = {nota.erro}/>}
            

        </tbody>
        
        
        
    );
}

export default NotaInvalida;