import TextField from '@mui/material/TextField';
import styles from "./CampoTexto.module.css"
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function CampoTexto ({arquivoIMG, titulo}) {
    return (
        <section className= {styles.campo_texto}>

            <div className= {styles.img_titulo}>
            <img src = {`/images/${arquivoIMG}.svg`} alt = {"icone do campo texto"}/>
            <h1>{titulo}</h1>
            </div>

            <TextField className= {styles.busca}  size="small"
            
            slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx = {{color :"#A0AEAC"}}/>
                    </InputAdornment>
                  ),
                },
              }}
            
            />
        </section>
    );
}

export default CampoTexto;