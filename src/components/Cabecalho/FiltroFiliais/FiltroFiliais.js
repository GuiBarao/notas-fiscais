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
    
    return (

            <FormControl>
                <InputLabel className={styles.label} shrink >Filiais</InputLabel>
                <Select className={styles.select}
                
                multiple
                value={filtragem}
                onChange={handleChange}
                renderValue={(selected) => (
                    <span className={styles.n_filiais}>
                      {`${selected.length} filiais`}
                    </span>
                  )}

                MenuProps={{classes : {paper : styles.menuPaper}}}

                >
                    
                    {filiais.map((filial) => (
                    <MenuItem key={filial.nomeFilial} value={filial.nomeFilial}>
                        <Checkbox className={styles.checkbox_item}  checked = {filtragem.includes(filial.nomeFilial)}/>
                        <ListItemText className={styles.text_item} primary={filial.nomeFilial}  />
                    </MenuItem>
                    ))}


                </Select>
            </FormControl>
        
    );
}

export default FiltroFiliais;