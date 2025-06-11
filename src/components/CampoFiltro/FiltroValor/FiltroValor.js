import CampoValor from "./CampoValor/CampoValor.js";

function FiltroValor({onChangeMin, valueMin, onChangeMax, valueMax}) {
    return (
        
        <section className= "flex flex-col gap-2">

            <div className= "flex flex-row text-main_text_color text-base gap-1">
            <img src = {`/images/valor_icon.svg`} alt = {"icone do campo texto"}/>
            <h1>Valor:</h1>
            </div>
            
            <div className="flex flex-row gap-3">
                <CampoValor onChange={onChangeMin} value={valueMin}/>
                <p className="text-main_text_color text-base text-bold self-center m-0">-</p>
                <CampoValor onChange={onChangeMax} value={valueMax}/>

            </div>

    
        </section>

    );

}

export default FiltroValor;