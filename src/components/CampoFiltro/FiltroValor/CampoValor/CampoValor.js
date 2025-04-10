import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import styles from "./CampoValor.module.css"
function CampoValor ({onChange, value}) {
    return(
        <TextField type='number' autoComplete='off' onChange={onChange} value={value}
        className={styles.componente_textField}
        
        sx={{  "& .MuiInputBase-root": {height : "25px"}, background: "#425E59", border: "1px solid #A0AEAC", 
            borderStyle: "solid", borderRadius: "7px", "& input": {color:"#ffffff"}}}  
            
        size="small"
        
        slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <p className= {styles.cifrao}>R$</p>
                </InputAdornment>
              ),
            },
          }}
        
        />
    );
}

export default CampoValor;