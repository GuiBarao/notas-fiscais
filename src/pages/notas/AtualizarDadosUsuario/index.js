import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack'
import CampoTexto from "../../../components/CampoTexto/index.js";
import { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Button } from '@mui/material';
import SelectFiliais from '../../../components/SelectFiliais/index.js';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import atualizaUsuario from '../../../services/put/usuario.js';
import { HttpStatusCode } from 'axios';
import { useNavigate } from 'react-router-dom';
import CustomToast from '../../../components/toast'

const AtualizarDadosUsuario = ({open, onClose, usuarioEscolhido, filiais, atualizaListaUsuarios}) => {

  const [cpf, setCpf] = useState(usuarioEscolhido)
  const [senha, setSenha] = useState("")
  const [nomeCompleto, setNomeCompleto] = useState("")
  const [nomeUsuario, setNomeUsuario] = useState("")
  const [filiaisPermitidas, setFiliaisPermitidas] = useState([])
  const [statusState, setStatusState] = useState(null)

  const navigate = useNavigate()

  const excecoes_atualizacao = {
    [HttpStatusCode.Conflict] : {type : "warning", message:"CPF já cadastrado"},
    [HttpStatusCode.UnprocessableEntity] : {type : "warning", message:"Dados inválidos"},
    [HttpStatusCode.Unauthorized] : {type : "error", message : "Ação não autorizada", redirect : '/'}
  }

  useEffect(() => {
    if (usuarioEscolhido) {
      setCpf(usuarioEscolhido.cpf)
      setNomeCompleto(usuarioEscolhido.nomeCompleto)
      setNomeUsuario(usuarioEscolhido.nomeUsuario)
    }
  }, [usuarioEscolhido])

  const submeterAtualizacao = async () => {
    try {
      
      const response = await atualizaUsuario(usuarioEscolhido.id, cpf, nomeUsuario, nomeCompleto, senha, filiaisPermitidas, statusState)
      CustomToast({type: 'success', message:'Usuário atualizado com sucesso'})
      atualizaListaUsuarios(response)
      onClose()
    }
    catch(error){
        const statusCode = error.status
        const excecaoConfig = excecoes_atualizacao[statusCode]
        
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
              <FolderSharedIcon />
              <h1>Atualizar usuário</h1>
            </div>
            
            <div className='flex flex-row justify-between'>
              <CampoTexto icon={<PersonIcon/>} corTitulo={"text.secondary"} titulo={"Nome completo"} value={nomeCompleto} onChange={(ev) => {setNomeCompleto(ev.target.value)}}  type="text" />
              <CampoTexto icon={<PersonIcon/>} corTitulo={"text.secondary"} titulo={"Nome de usuário"} value={nomeUsuario} onChange={(ev) => {setNomeUsuario(ev.target.value)}}  type="text" />
            </div>
                    
            <div className='flex flex-row justify-between'>
              <CampoTexto icon={<AssignmentIndIcon/>} corTitulo={"text.secondary"} titulo={"CPF"} value={cpf} onChange={(ev) => setCpf(ev.target.value)} type="text" />
              <CampoTexto icon={<AssignmentIndIcon/>} corTitulo={"text.secondary"} titulo={"Senha"} value={senha} onChange={(ev) => setSenha(ev.target.value)} type="text" />
            </div>
            
           
            <SelectFiliais filiais={filiais} filiaisPermitidas={usuarioEscolhido && usuarioEscolhido.filiaisPermitidas} onChangePermissoes={setFiliaisPermitidas}/>

            <div className='flex flex-row gap-4 justify-between'>
              <Button onClick={() => {setStatusState(!statusState)
                                      submeterAtualizacao()}} 
                      sx={{ alignSelf:"flex-end", 
                          backgroundColor: usuarioEscolhido && usuarioEscolhido.status ? "background.red" : "background.icon", 
                          color: "text.primary"}} > 
              { usuarioEscolhido && usuarioEscolhido.status? "Inativar usuário" : "Ativar usuario"}
              </Button>


              <Button onClick={submeterAtualizacao} sx={{ alignSelf:"center", 
                            backgroundColor:"background.icon", 
                            color:"text.primary"}} > 
                Atualizar dados
              </Button>

            </div>

          </Stack>
        </Modal>
    )
}

export default AtualizarDadosUsuario