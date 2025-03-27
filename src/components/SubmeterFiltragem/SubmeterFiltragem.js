import styles from "./SubmeterFiltragem.module.css"


function SubmeterFiltragem({value, onChange}) {
    return (

        <button className={styles.botao} type="button" value={value} onChange={onChange}>
            <img src = "/images/submissao_icon.svg" alt="Icone submissao"/>
            <h1 className={styles.titulo}>Filtrar</h1>
        </button>
    );
}

export default SubmeterFiltragem;