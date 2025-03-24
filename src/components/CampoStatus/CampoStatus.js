import styles from "./CampoStatus.module.css"


function format_status(status_bool) {
    let status_txt = "Válido";
  
    if(!status_bool) {
      status_txt = "Inválido";
    }
  
    return status_txt;
  }

function define_classe_css(status) {
  if (status) {
    return styles.p_valido;
  }

  return styles.p_invalido
}

function CampoStatus({status, mensagem, log}) {

    return (
        <section className = {styles.campo_status}>
            <h1>Status</h1>
            <p className = {define_classe_css(status)}>{format_status(status)}</p>
        </section>
    )

}

export default CampoStatus;