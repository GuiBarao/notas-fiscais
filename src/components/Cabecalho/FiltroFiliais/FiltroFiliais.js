import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import styles from "./FiltroFiliais.module.css"

function FiltroFiliais({filiais, filtragem, onChangeFiltragem}) {

      const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      onChangeFiltragem(typeof value === 'string' ? value.split(',') : value);
    };

      const sx_select = {
        width:"200px", 
        height:"35px", 
        padding:"0px",
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "black",
          borderWidth: "1px"
        }

      }
    
    return (

            <FormControl sx={{borderStyle:"solid", borderWidth:"1px", borderColor:"black", borderRadius:"8px"}}>
                <InputLabel id="label" sx={{color:"black !important", backgroundColor:"var(--main_color)", fontSize:"16px", fontWeight:"500"}} shrink >Filiais</InputLabel>
                <Select  labelId='label' sx={sx_select}
                multiple
                value={filtragem}
                onChange={handleChange}
                renderValue={(selected) => (
                    <span className="font-[15px] m-0 text-black">
                      {`${selected.length} filiais`}
                    </span>
                  )}

                MenuProps={{classes : {paper : styles.menuPaper}}}

                >
                    
                    {filiais.map((filial) => (
                    <MenuItem key={filial.nomeFilial} value={filial.nomeFilial}>
                        <Checkbox checked = {filtragem.includes(filial.nomeFilial)}/>
                        <ListItemText sx={{color:"var(--main_text_color )", fontSize:"16px"}} primary={filial.nomeFilial}  />
                    </MenuItem>
                    ))}


                </Select>
            </FormControl>
        
    );
}

export default FiltroFiliais;