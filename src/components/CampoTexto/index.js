import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { InputLabel } from '@mui/material';


function CampoTexto ({value, onChange, type, icon, titulo, corTitulo}) {
    return (
        <section className= "flex flex-col gap-2">

            <InputLabel sx= {{color:corTitulo}}> {icon} {titulo} </InputLabel>

            <TextField type = {type} autoComplete='off' value={value} onChange={onChange}
              sx={{ "& input": {color:"primary.text"}, "& .MuiInputBase-root": {height: "25px"}, 
                    border: "1px solid", borderStyle: "solid", borderRadius: "7px", borderColor:"border.primary"}} 
              size = {"small"}
            
            slotProps={       
              {
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx = {{color :"#A0AEAC"}}/>
                    </InputAdornment>
                  ),
                },
              }
            }
            
            />
        </section>
    );
}

export default CampoTexto;