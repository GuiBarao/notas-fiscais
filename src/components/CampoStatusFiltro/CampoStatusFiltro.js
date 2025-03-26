import styles from "./CampoStatusFiltro.module.css"
import Checkbox from '@mui/material/Checkbox';

function format_status(status_bool) {
    let status_txt = "Válido";
  
    if(!status_bool) {
      status_txt = "Inválido";
    }
  
    return status_txt;
}

function define_classe_css(status) {
    if (status) {
      return styles.status_valido;
    }
  
    return styles.status_invalido
}

function CampoStatusFiltro({status, value, onChange}) {
    return (
        <section className={define_classe_css(status)}>

                <Checkbox value={value} onChange = {onChange} defaultChecked />
                <h1 className={styles.titulo}>{format_status(status)}</h1>
            
        </section>
    );
}

export default CampoStatusFiltro;