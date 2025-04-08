import NotaInvalida from "../NotaInvalida/NotaInvalida";
import NotaValida from "../NotaValida/NotaValida";
import styles from "./TabelaNotas.module.css"



function TabelaNotas({notas}) {


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
          

    
            {notas.map((nota) => {return nota.status?
               <NotaValida {...nota}/> : 
                <NotaInvalida nota = {nota}/>})}
           

        
      </table>
    );
}

export default TabelaNotas;
