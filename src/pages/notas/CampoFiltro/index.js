import CampoTexto from "../../../components/CampoTexto/index.js";
import FiltroValor from "./FiltroValor/index.js";
import FiltroStatus from "./FiltroStatus/index.js"
import bgFundo from "../../../assets/bg.webp"
import logoPax from "../../../assets/svg/logo_pax.svg"
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

function CampoFiltro({filtroTitular, filtroCpf, filtroNumero,
        filtroValorMin, filtroValorMax, filtroStatus,
        setFiltroTitular, setFiltroCpf, setFiltroNumero,
        setFiltroValorMin, setFiltroValorMax, setFiltroStatus}){

    return (
        <section    className = "flex flex-col w-80 h-full  justify-evenly fixed"
                    style={{ backgroundImage: `url(${bgFundo})` }}>

            <img className = "w-40 h-20 self-center" src = {logoPax} alt = "logo"/>
            
            <div className= "flex flex-col gap-4 items-center">
                <CampoTexto 
                value= {filtroTitular} 
                onChange={(ev) => {setFiltroTitular(ev.target.value);}}
                icon={<PersonIcon fontSize="small" sx={{color: "icon.primary"}}/>} titulo={"Nome Titular:"}/>

                <CampoTexto
                value={filtroCpf}
                onChange={(ev) => {setFiltroCpf(ev.target.value);}}
                icon={<AssignmentIndIcon fontSize="small" sx={{color: "icon.primary"}}/>} titulo={"CPF:"}/>

                <FiltroStatus 
                value={filtroStatus}
                onChange={(ev) => {setFiltroStatus(ev.target.value);}}/>

                <CampoTexto
                value = {filtroNumero}
                onChange={(ev) => {setFiltroNumero(ev.target.value);}}
                type='number'
                icon={<StickyNote2Icon fontSize="small" sx={{color: "icon.primary"}}/>} titulo={"Número:"}/>


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