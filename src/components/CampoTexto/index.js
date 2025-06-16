import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function CampoTexto ({value, onChange, type, arquivoIMG, titulo}) {
    return (
        <section className= "flex flex-col gap-2">

            <div className= "flex flex-row gap-1 m-0 text-main_text_color text-base">
            <img src = {`/images/${arquivoIMG}.svg`} alt = {"icone do campo texto"}/>
            <h1>{titulo}</h1>
            </div>

            <TextField type = {type} autoComplete='off' value={value} onChange={onChange}
            sx={{ "& input": {color:"#ffffff"}, "& .MuiInputBase-root": {height: "25px"}, background: "#425E59", border: "1px solid #A0AEAC", borderStyle: "solid", borderRadius: "7px"}} 
            className= "rounded-lg border-solid border border-border_input_color w-72 self-center h-6" size = {"small"}
            
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