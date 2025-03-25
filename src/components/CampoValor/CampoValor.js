import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import styles from "./CampoValor.module.css"
function CampoValor () {
    return(
        <TextField className={styles.componente_textField}
        
        sx={{background: "#425E59", border: "1px solid #A0AEAC", 
            borderStyle: "solid", borderRadius: "7px"}}  
            
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