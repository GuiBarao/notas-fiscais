import FiltroFiliais from "./FiltroFiliais/index.js";
import FiltroData from "./FiltroData/index.js";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react'

function Cabecalho ({   filiais, filtroFiliaisValue, filtroFiliaisOnChange, 
                        dataInicioValue, dataInicioOnChange, dataFimValue, dataFimOnChange, 
                        onChangeModalUsuario})
{

    const [filiaisPermitidas, setFiliaisPermitidas] = useState([])

    useEffect(() => {
        if(filiaisPermitidas.length === 0){
        setFiliaisPermitidas(filiais.filter((filial) => filial.filialPermitida))
        }
    }, [filiais, filiaisPermitidas])

    return (
        <header className=" rounded-b-2xl rounded-r-none h-20 items-center flex flex-row justify-around bg-background_primary border-[1px] border-border_secondary">

            <h1 className="text-titulo_notas_fiscais text-xl font-extrabold m-0 text-text_title">Notas Fiscais</h1>
            <div className="flex flex-row gap-2 items-center">
                <FiltroFiliais filtragem={filtroFiliaisValue} onChangeFiltragem={filtroFiliaisOnChange} 
                filiais={filiaisPermitidas}/>

                <FiltroData inicioValue = {dataInicioValue} inicioOnChange = {dataInicioOnChange} 
                fimValue = {dataFimValue} fimOnChange = {dataFimOnChange}/>
            </div>
            <AccountCircleIcon onClick={() => {onChangeModalUsuario(true)}} sx={{fontSize:"40px", color:"background.icon", cursor:"pointer"}}/>


        </header>
    );
}

export default Cabecalho; 