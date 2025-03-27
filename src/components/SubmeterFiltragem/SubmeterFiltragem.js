import styles from "./SubmeterFiltragem.module.css"


function SubmeterFiltragem({onClick}) {
    return (

        <button className={styles.botao} type="button" onClick={onClick}>
            <img src = "/images/submissao_icon.svg" alt="Icone submissao"/>
            <h1 className={styles.titulo}>Filtrar</h1>
        </button>
    );
}

export default SubmeterFiltragem;