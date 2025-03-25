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

function CampoStatus({status}) {

    return (
        <section className = {styles.campo_status}>
            <div className={styles.img_titulo_wrapper}>
              <img src = "/images/status_icon.svg" alt = "icone de status"/>
              <h1>Status</h1>
            </div>
            <p className = {define_classe_css(status)}>{format_status(status)}</p>
        </section>
    )

}

export default CampoStatus;