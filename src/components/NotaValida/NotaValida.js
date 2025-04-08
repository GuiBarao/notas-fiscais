import styles from "./NotaValida.module.css"

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

              <tr className={styles.info_wrapper}>
                  <td><p className={styles.info}>{titular} </p></td>
                  <td><p className={styles.info}>{numero}</p> </td>
                  <td><p className={styles.info}>{format_date(data)}</p> </td>
                  <td><p className={styles.info}>{valor}</p> </td>
                  <td><p className={styles.info}>{format_cpf(cpf)}</p> </td>
                  <td><p className={styles.info}>{status? "Válido" : "Inválido"}</p></td>                          
              </tr> 
    );
}

export default NotaValida;