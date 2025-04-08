import InfoErro from "../InfoErro/InfoErro.js"
import styles from "./CorpoAccordionNota.module.css"

function CorpoAccordionNota ({erro})
{
    return (
        <tr className={styles.corpo_accordion}>
            <td colSpan={7}>
                <InfoErro {...erro}/>
            </td>
        </tr>
    );
}

export default CorpoAccordionNota;