import CampoValor from "../../../../components/CampoValor/index.js";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
function FiltroValor({onChangeMin, valueMin, onChangeMax, valueMax}) {
    
    return (
        
        <section className= "flex flex-col gap-2">

            <div className= "flex flex-row text-text_primary text-base gap-1">
            <RequestQuoteIcon />
            <h1>Valor:</h1>
            </div>
            
            <div className="flex flex-row gap-3">
                <CampoValor onChange={onChangeMin} value={valueMin}/>
                <p className="text-text_primary text-base font-bold self-center m-0">-</p>
                <CampoValor onChange={onChangeMax} value={valueMax}/>

            </div>

    
        </section>

    );

}

export default FiltroValor;