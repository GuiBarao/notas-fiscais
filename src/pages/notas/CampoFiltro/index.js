import CampoTexto from "../../../components/CampoTexto/index.js";
import FiltroValor from "./FiltroValor/index.js";
import FiltroStatus from "./FiltroStatus/index.js"


function CampoFiltro({filtroTitular, filtroCpf, filtroNumero,
        filtroValorMin, filtroValorMax, filtroStatus,
        setFiltroTitular, setFiltroCpf, setFiltroNumero,
        setFiltroValorMin, setFiltroValorMax, setFiltroStatus}){

    return (
        <section className = "flex flex-col bg-main_color w-80 h-full  justify-evenly fixed">
            <img className = "w-40 h-20 self-center" src = "/images/logo_pax.svg" alt = "logo"/>
            
            <div className= "flex flex-col gap-4 items-center">
                <CampoTexto 
                value= {filtroTitular} 
                onChange={(ev) => {setFiltroTitular(ev.target.value);}}
                arquivoIMG={"titular_icon"} titulo={"Nome Titular:"}/>

                <CampoTexto
                value={filtroCpf}
                onChange={(ev) => {setFiltroCpf(ev.target.value);}}
                arquivoIMG={"cpf_icon"} titulo={"CPF:"}/>

                <FiltroStatus 
                value={filtroStatus}
                onChange={(ev) => {setFiltroStatus(ev.target.value);}}/>

                <CampoTexto
                value = {filtroNumero}
                onChange={(ev) => {setFiltroNumero(ev.target.value);}}
                type='number'
                arquivoIMG={"numero_icon"} titulo={"Número:"}/>


                <FiltroValor 
                valueMin={filtroValorMin} 
                onChangeMin={(ev) => {setFiltroValorMin(ev.target.value);}}
                
                valueMax={filtroValorMax} 
                onChangeMax={(ev) => {setFiltroValorMax(ev.target.value);}}
                />


            </div>
            
        </section>
    );
}

export default CampoFiltro;