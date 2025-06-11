import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function CampoValor ({onChange, value}) {
    return(
        <TextField type='number' autoComplete='off' onChange={onChange} value={value}
        
        sx={{ width:"125px", height:"25px", "& .MuiInputBase-root": {height : "25px"}, 
              background: "#425E59", border: "1px solid #A0AEAC", 
              borderStyle: "solid", borderRadius: "7px", "& input": {color:"#ffffff"}}}  
            
        size="small"
        
        slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <p className= "text-main_text_color text-base ">R$</p>
                </InputAdornment>
              ),
            },
          }}
        
        />
    );
}

export default CampoValor;