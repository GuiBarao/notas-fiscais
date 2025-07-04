import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack'
import CampoTexto from "../../../components/CampoTexto/index.js";
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SelectFiliais from "./SelectFiliais/index.js"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import cadastro from '../../../services/post/cadastro.js'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import CustomToast from '../../../components/toast'
import { HttpStatusCode } from 'axios';
import { useNavigate } from 'react-router-dom'

function Cadastro({open, onClose, filiais}){

  const [cpf, setCPF] = useState("")
  const [nomeCompleto, setNomeCompleto] = useState("")
  const [nomeUsuario, setNomeUsuario] = useState("")
  const [filiaisPermitidas, setFiliaisPermitidas] = useState([])

  const navigate = useNavigate()

  const excecoes_cadastro = {
    [HttpStatusCode.Conflict] : {type : "warning", message:"CPF já cadastrado"},
    [HttpStatusCode.UnprocessableEntity] : {type : "warning", message:"Dados inválidos"},
    [HttpStatusCode.Unauthorized] : {type : "error", message : "Ação não autorizada", redirect : '/'}
  }

  const cadastrar = async () => {
      try{
        await cadastro(cpf, nomeCompleto, nomeUsuario, filiaisPermitidas)
        CustomToast({type:"success", message:"Usuário cadastrado com sucesso!"})
        
      }
      catch(error){
        const statusCode = error.status
        const excecaoConfig = excecoes_cadastro[statusCode]
        
        if(excecaoConfig) {

          CustomToast({type: excecaoConfig.type, message:excecaoConfig.message})

          if(excecaoConfig.redirect) {
            setTimeout(() => {
              navigate(excecaoConfig.redirect)
            }, 2000)
          }
        }
        else {
          CustomToast({type:"error", message:"Erro no cadastro!"})
        }
      }

  }

    return (
        <Modal sx={{display:"flex", justifyContent:"center"}} open={open} onClose={onClose}>
          <Stack  className="!text-black"
                  sx={{width:"45rem", padding: "50px",
                      backgroundColor:"background.primary", display:"flex", gap:"30px",
                      "& input": {color: "black !important"},
                      borderStyle:"solid", borderRadius:"20px",
                      maxHeight:"100%", overflowY:"auto"}}>
            
            <div className="flex flex-row gap-1 items-center text-text_secondary font-semibold text-xl">
            <PersonAddAlt1Icon/>
            <h1>Cadastrar usuário</h1>
            </div>

            <div className='flex flex-row justify-between'>
              <CampoTexto icon={<PersonIcon/>} corTitulo={"text.secondary"} titulo={"Nome completo"} value={nomeCompleto} onChange={(ev) => {setNomeCompleto(ev.target.value)}} type="text" />
              <CampoTexto icon={<PersonIcon/>} corTitulo={"text.secondary"} titulo={"Nome de usuário"} value={nomeUsuario} onChange={(ev) => {setNomeUsuario(ev.target.value)}} type="text" />
            </div>
            
            <div className='flex flex-row justify-between'>
              <CampoTexto icon={<AssignmentIndIcon/>} corTitulo={"text.secondary"} titulo={"CPF"} value={cpf} onChange={(ev) => {setCPF(ev.target.value)}} type="text" />
              <p className='font-semibold w-96 text-sm text-center content-end'>Senha inicial será automaticamente registrada como os 3 primeiros dígitos do CPF</p>
            </div>

            <SelectFiliais filiais={filiais} onChangePermissoes={setFiliaisPermitidas}/>

            <Box className="mt-2">
              <Button sx={{ alignSelf:"center", 
                            backgroundColor:"background.icon", 
                            color:"text.primary"}} 
                      onClick={cadastrar}> 
                Cadastrar novo usuário
              </Button>
            </Box>

          </Stack>
        </Modal>
    )
}

export default Cadastro