import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function FiltroStatus({onChange, value}) {

    return (
        <section className="flex flex-col gap-2">
            
            <InputLabel sx = {{display:"flex", flexDirection : "row", gap:"5px", color:"#ffffff"}}>
                <img className="w-5 h-5" src= "/images/status_icon.svg" alt="Icone de status"/>
                <h1 className="text-main_text_color text-base">Status:</h1>
            </InputLabel>

            <Select onChange={onChange} value = {value} 
                sx = {{ width: "284px", height: "25px", borderWidth : "1px", 
                        borderStyle:"solid", borderColor: "border.main", backgroundColor: "background.input"}}
                
                MenuProps={{ PaperProps: { sx: { backgroundColor: "background.input"}}}}
            >

                <MenuItem value = {"Todos"}>
                    <p className='text-main_text_color'>Todos</p>
                </MenuItem>

                <MenuItem value = {"Válido"}>
                    <p className='text-main_text_color'>Válidos</p>
                </MenuItem>

                <MenuItem value = {"Inválido"}>
                    <p className='text-main_text_color'>Inválidos</p>
                </MenuItem>

            </Select>
            
        </section>
    );
}

export default FiltroStatus;