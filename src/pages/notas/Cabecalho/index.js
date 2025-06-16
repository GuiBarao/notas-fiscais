import FiltroFiliais from "./FiltroFiliais/index.js";
import FiltroData from "./FiltroData/index.js";

function Cabecalho ({filiais, filtroFiliaisValue, filtroFiliaisOnChange, dataInicioValue, dataInicioOnChange, dataFimValue, dataFimOnChange})
{
    return (
        <header className="bg-main_color rounded-b-2xl rounded-r-none h-20 items-center flex flex-row justify-around">
            <h1 className="text-titulo_notas_fiscais text-xl font-extrabold m-0">Notas Fiscais</h1>
            <div className="flex flex-row gap-2 items-center">
                <FiltroFiliais filtragem={filtroFiliaisValue} onChangeFiltragem={filtroFiliaisOnChange} 
                filiais={filiais}/>

                <FiltroData inicioValue = {dataInicioValue} inicioOnChange = {dataInicioOnChange} 
                fimValue = {dataFimValue} fimOnChange = {dataFimOnChange}/>
            </div>

        </header>
    );
}

export default Cabecalho; 