import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function CampoValor ({onChange, value, sx_prop = {}, adornmentClass}) {
    return(
        <TextField type='number' autoComplete='off' onChange={onChange} value={value}
        
        sx={[{ width:"125px", height:"25px", "& .MuiInputBase-root": {height : "25px"}, 
              border: "1px solid", borderRadius: "7px", borderColor:"border.primary" ,
              "& input": {color:"text.primary"}}, sx_prop]}  
            
        size="small"
        
        slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <p className=  {` text-text_primary text-base ${adornmentClass} `}>R$</p>
                </InputAdornment>
              ),
            },
          }}
        
        />
    );
}

export default CampoValor;