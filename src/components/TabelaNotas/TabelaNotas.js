import styles from "./TabelaNotas.module.css"

function format_date(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  }
  
  function format_cpf(cpf) {
  
    return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11);
}


function TabelaNotas({notas}) {
    return (
    <table className={styles.tabela}>
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

            
            {notas.map((nota) =>
              
              <tr className={styles.info_wrapper}>
                  <td><p className={styles.info}>{nota.titular} </p></td>
                  <td><p className={styles.info}>{nota.numero}</p> </td>
                  <td><p className={styles.info}>{format_date(nota.data)}</p> </td>
                  <td><p className={styles.info}>{nota.valor}</p> </td>
                  <td><p className={styles.info}>{format_cpf(nota.cpf)}</p> </td>
                  <td><p className={styles.info}>{nota.status? "Válido" : "Inválido"}</p></td>                          
              </tr> )}

        </tbody>
      </table>
    );
}

export default TabelaNotas;