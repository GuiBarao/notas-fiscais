import CampoValor from "../CampoValor/CampoValor";
import styles from "./FiltroValor.module.css";

function FiltroValor() {
    return (
        
        <section className= {styles.campo_texto}>

        <div className= {styles.img_titulo}>
        <img src = {`/images/valor_icon.svg`} alt = {"icone do campo texto"}/>
        <h1>Valor:</h1>
        </div>
        
        <div className={styles.intervalo_valor}>
            <CampoValor/>
            <p className={styles.traco}>-</p>
            <CampoValor/>

        </div>

  
    </section>

    );

}

export default FiltroValor;