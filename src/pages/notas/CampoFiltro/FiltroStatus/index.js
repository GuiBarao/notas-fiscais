import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import bg from "../../../../assets/bg.webp"

function FiltroStatus({onChange, value}) {

    return (
        <section className="flex flex-col gap-2 w-5/6 self-center">
            
            <InputLabel sx = {{display:"flex", flexDirection : "row", gap:"5px", color:"text.primary"}}>
                <BeenhereIcon fontSize='small' sx={{color: "icon.primary"}}/>
                <h1 className="text-text_primary text-base">Status:</h1>
            </InputLabel>

            <Select onChange={onChange} value = {value} 
                sx = {{ width: "100%", height: "25px", borderWidth : "1px", 
                        borderStyle:"solid", borderColor: "border.primary", alignSelf:"center"}}
                
                MenuProps={{ PaperProps: { sx: { backgroundImage: `url(${bg})`}}}}
            >

                <MenuItem value = {"Todos"}>
                    <p className='text-text_primary'>Todos</p>
                </MenuItem>

                <MenuItem value = {"Válido"}>
                    <p className='text-text_primary'>Válidos</p>
                </MenuItem>

                <MenuItem value = {"Inválido"}>
                    <p className='text-text_primary'>Inválidos</p>
                </MenuItem>

            </Select>
            
        </section>
    );
}

export default FiltroStatus;