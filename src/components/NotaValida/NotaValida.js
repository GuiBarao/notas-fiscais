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
        <div className={styles.nota}>
            
            <td><strong>{titular}</strong></td>
            <td><strong>{numero}</strong></td>
            <td><strong>{format_date(data)}</strong></td>
            <td><strong>{`R$${valor},00`}</strong></td>
            <td><strong>{format_cpf(cpf)}</strong></td>
            <td><strong>{status ? "Válido" : "Inválido"}</strong></td>

        </div>
    );
}

export default NotaValida;