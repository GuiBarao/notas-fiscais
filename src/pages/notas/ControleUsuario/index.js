import { Button } from "@mui/material"
import Stack from "@mui/material/Stack";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Modal from "@mui/material/Modal";

function ControleUsuario({open, onChangeModalUsuario, onChangeModalCadastro}) {

    const buttonSx = {  color:"text.secondary", backgroundColor:"background.primary", 
                        borderStyle:"solid", borderColor:"border.secondary", 
                        borderWidth:"2px", borderRadius:"10px", display:"flex", gap:"5px"  }
    
    return (
        <Modal sx={{display:"flex", justifyContent:"end"}} open={open} onClose={() => {onChangeModalUsuario(false)}}>

            <Stack sx={{backgroundColor:"background.primary", 
                        borderStyle:"solid",
                        borderTopLeftRadius:"20px", 
                        borderBottomLeftRadius:"20px", 
                        width:"20rem",
                        alignItems:"center",
                        gap:"20px"}}>

                <AccountCircleIcon sx={{fontSize:"80px", color:"background.icon"}}/>

                <p className="text-text_secondary font-semibold"> {sessionStorage.getItem("nomeUsuario")} </p>

                <Button sx={buttonSx}>
                    <LogoutIcon/>
                    Sair
                </Button>

                <Button onClick={() => {onChangeModalCadastro(true)}} sx={buttonSx}>
                    <PersonAddAlt1Icon />
                    Cadastrar
                </Button>
            </Stack>
        </Modal>
    )
}

export default ControleUsuario;