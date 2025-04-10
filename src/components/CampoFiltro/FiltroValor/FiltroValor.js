import CampoValor from "../CampoFiltro/CampoValor/CampoValor";
import styles from "./FiltroValor.module.css";

function FiltroValor({onChangeMin, valueMin, onChangeMax, valueMax}) {
    return (
        
        <section className= {styles.filtro_valor}>

            <div className= {styles.img_titulo}>
            <img src = {`/images/valor_icon.svg`} alt = {"icone do campo texto"}/>
            <h1>Valor:</h1>
            </div>
            
            <div className={styles.intervalo_valor}>
                <CampoValor onChange={onChangeMin} value={valueMin}/>
                <p className={styles.traco}>-</p>
                <CampoValor onChange={onChangeMax} value={valueMax}/>

            </div>

    
        </section>

    );

}

export default FiltroValor;