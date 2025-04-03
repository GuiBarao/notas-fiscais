import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


function FiltroFiliais({filiais, filtragem, onChangeFiltragem}) {

    
    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        onChangeFiltragem(typeof value === 'string' ? value.split(',') : value);
      };

    return (

            
            <FormControl sx = {{m:1, height : "25px"}}>
                <InputLabel shrink sx={{color: "#ffffff", fontFamily:"monospace"}}>Filiais</InputLabel>
                <Select sx = {{width: "200px", height: "35px", padding : "0px", 
                 backgroundColor : "#425E59" }}
                
                multiple
                value={filtragem}
                onChange={handleChange}
                renderValue={(selected) => `${selected.length} filiais`}
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                >

                    
                    {filiais.map((filial) => (
                    <MenuItem key={filial} value={filial}>
                        <Checkbox  checked = {filtragem.includes(filial)}/>
                        <ListItemText primary={filial} />
                    </MenuItem>
                    ))}


                </Select>
            </FormControl>
        
    );
}

export default FiltroFiliais;