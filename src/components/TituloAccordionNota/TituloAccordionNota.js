import styles from "./TituloAccordionNota.module.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function format_date(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

function format_cpf(cpf)
{

    return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11);
}


function TituloAccordionNota({numero, cpf, titular, data, valor, status, setValueIsOpen, valueIsOpen}) {

    const angulo_expandIcon = valueIsOpen? 180 : 0;
    return (
        

        <tr onClick = {() => setValueIsOpen(!valueIsOpen)} className={styles.summary}>
                  <td><p className={styles.typograph}>{titular} </p></td>
                  <td><p className={styles.typograph}>{numero}</p> </td>
                  <td><p className={styles.typograph}>{format_date(data)}</p> </td>
                  <td><p className={styles.typograph}>{valor}</p> </td>
                  <td><p className={styles.typograph}>{format_cpf(cpf)}</p> </td>
                  <td><p className={styles.typograph}>{status? "Válido" : "Inválido"}</p></td>
                  <td><ExpandMoreIcon sx={{transform : `rotate(${angulo_expandIcon}deg)`}} className={styles.expand_icon}/></td>                         
        </tr> 
        
      
        
    );
}

export default TituloAccordionNota;