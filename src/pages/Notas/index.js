import AcordeaoFilial from "../../components/AcordeaoFilial/AcordeaoFilial";
import filiais from "../../json/db.json"


function Notas () {
    return (
        <section>

            {filiais.map( (filial) => {
                return <AcordeaoFilial {...filial} />
            })}
        </section>
    );
}

export default Notas;