
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styles from "./FiltroStatus.module.css"

function FiltroStatus({onChange, value}) {
    return (
        <section className={styles.filtro_status}>
            
            <InputLabel sx = {{display:"flex", flexDirection : "row", gap:"5px", color:"#ffffff"}}>
                <img className={styles.icon}  src= "/images/status_icon.svg" alt="Icone de status"/>
                <h1 className={styles.titulo}>Status:</h1>
            </InputLabel>

            <Select onChange={onChange} value = {value} 
                sx = {{width: "284px", height: "25px", border : "1px solid #A0AEAC", 
                backgroundColor: "#425E59", "css-1toxriw-MuiList-root-MuiMenu-list" : {backgroundColor : "#A0AEAC !important"}}}
                
                MenuProps={{ PaperProps: { sx: { backgroundColor: "#425E59"}}}}
            >

                <MenuItem value = {"Válido"}>
                    <p className = {styles.opcao}>Válidos</p>
                </MenuItem>

                <MenuItem value = {"Inválido"}>
                    <p className = {styles.opcao}>Inválidos</p>
                </MenuItem>

                <MenuItem value = {"Todos"}>
                    <p className = {styles.opcao}>Todos</p>
                </MenuItem>

            </Select>
            
        </section>
    );
}

export default FiltroStatus;