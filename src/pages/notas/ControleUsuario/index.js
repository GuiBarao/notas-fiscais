import { Button } from "@mui/material"
import Stack from "@mui/material/Stack";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Modal from "@mui/material/Modal";
import { useNavigate } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


function ControleUsuario({open, onChangeModalUsuario, onChangeModalCadastro, onChangeModalUsuariosCadastrados}) {

    const buttonSx = {  color:"text.secondary", backgroundColor:"background.primary", 
                        borderStyle:"solid", borderColor:"border.secondary", 
                        borderWidth:"2px", borderRadius:"10px", display:"flex", gap:"5px"  }

    const navigate = useNavigate()

    const logOut = () => {
        sessionStorage.removeItem("token")
        navigate("/")
    }
    
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

                <Button onClick={() => {onChangeModalUsuariosCadastrados(true)}} sx={buttonSx}>
                    <PeopleAltIcon />
                    Cadastros
                </Button>

                <Button onClick={logOut} sx={buttonSx}>
                    <LogoutIcon/>
                    Sair
                </Button>
            </Stack>
        </Modal>
    )
}

export default ControleUsuario;