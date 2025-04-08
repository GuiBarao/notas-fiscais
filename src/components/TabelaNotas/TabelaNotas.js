import NotaValida from "../NotaValida/NotaValida";
import styles from "./TabelaNotas.module.css"
import { useState } from "react";



function TabelaNotas({notas}) {

    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
    return (
    <table>
        <thead>
          <tr>
            <th className={styles.label}>Titular</th>
            <th className={styles.label}>Número</th>
            <th className={styles.label}>Data</th>
            <th className={styles.label}>Valor</th>
            <th className={styles.label}>CPF</th>
            <th className={styles.label}>Status</th>
          </tr>
        </thead>
          

        <tbody>

            
            {notas.map((nota) => <NotaValida {...nota}/>)}

        </tbody>
      </table>
    );
}

export default TabelaNotas;