import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function CampoTexto ({value, onChange, type, icon, titulo}) {
    return (
        <section className= "flex flex-col gap-2">

            <div className= "flex flex-row gap-1 m-0 text-text_primary text-base">
            {icon}
            <h1>{titulo}</h1>
            </div>

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