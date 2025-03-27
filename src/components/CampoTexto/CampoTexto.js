import TextField from '@mui/material/TextField';
import styles from "./CampoTexto.module.css"
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function CampoTexto ({value, onChange, arquivoIMG, titulo}) {
    return (
        <section className= {styles.campo_texto}>

            <div className= {styles.img_titulo}>
            <img src = {`/images/${arquivoIMG}.svg`} alt = {"icone do campo texto"}/>
            <h1>{titulo}</h1>
            </div>

            <TextField autoComplete='off' value={value} onChange={onChange}
            sx={{  "& .MuiInputBase-root": {height: "25px"}, background: "#425E59", border: "1px solid #A0AEAC", borderStyle: "solid", borderRadius: "7px"}} 
            className= {styles.busca} size = {"small"}
            
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