import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import buscarUsuarios from '../../../services/get/usuarios';
import { HttpStatusCode } from 'axios';
import CustomToast from '../../../components/toast'
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CampoTexto from '../../../components/CampoTexto'

const UsuariosCadastrados = ({open, onClose, onChangeModalCadastro}) => {

    const [usuarios, setUsuarios] = useState([])
    const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios)
    
    const [busca, setBusca] = useState("")

    const getUsuarios = async () => {
        try{
            const response = await buscarUsuarios()
            setUsuarios(response)
        }
        catch (error) {
            error.status === HttpStatusCode.Unauthorized ?
                CustomToast({type:'error', message:'Ação não autorizada'}) :
                CustomToast({type:'error', message:'Erro ao carregar os usuários'})
        }
    }

    useEffect(() => {
        open && getUsuarios()
    }, [open])

    useEffect(() => {
        setUsuariosFiltrados(usuarios.filter((usuario) => {
            return (
                usuario.cpf.includes(busca) || 
                usuario.nomeUsuario.toLowerCase().includes(busca) || 
                usuario.nomeCompleto.toLowerCase().includes(busca)) ||
                busca === ""
        }))
    }, [busca, usuarios])


    return (
        
        <Modal sx={{display:"flex", justifyContent:"center", marginTop:'10px', marginBottom:'10px'}} open={open} onClose={onClose}>

            
          <TableContainer  className="!text-black" component={Paper}
                  sx={{width:"75rem", padding: "50px",
                      backgroundColor:"background.primary", display:"flex", gap:"30px",
                      "& input": {color: "black !important"},
                       padding:'20px', 
                      display:'flex', flexDirection:'column'}}>

            <div className='flex flex-row justify-around'>

            <CampoTexto onChange={(ev) => {setBusca(ev.target.value)}} value={busca} />

            <Button onClick={() => {onChangeModalCadastro(true)}}
                    sx={{color:"text.secondary", backgroundColor:"background.primary", alignSelf:'right',
                        borderStyle:"solid", borderColor:"border.secondary", 
                        borderWidth:"2px", borderRadius:"10px", display:"flex", gap:"5px", width:'200px'}}>
                <PersonAddAlt1Icon />
                Cadastrar
            </Button>
            </div>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{color:"text.secondary"}}>Usuário</TableCell>
                        <TableCell sx={{color:"text.secondary"}} align="center">CPF</TableCell>
                        <TableCell sx={{color:"text.secondary"}} align="center">Nome completo</TableCell>
                        <TableCell sx={{color:"text.secondary"}} align="center">Filiais</TableCell>
                        <TableCell sx={{color:"text.secondary"}} align="center">Status</TableCell>
                        <TableCell sx={{color:"text.secondary"}} align="center"></TableCell>
                    </TableRow>
                 </TableHead>

                 <TableBody>
        
                    {usuariosFiltrados.map((usuario) =>  {
                        
                       return <TableRow
                            key={usuario.cpf}
                            sx={{color:"text.secondary", '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell sx={{color:"text.secondary"}} component="th" scope="row">
                                {usuario.nomeUsuario}
                            </TableCell>
                            <TableCell sx={{color:"text.secondary"}} align="center">{usuario.cpf}</TableCell>
                            <TableCell sx={{color:"text.secondary"}} align="center">{usuario.nomeCompleto}</TableCell>
                            <TableCell sx={{color:"text.secondary"}} align="center">
                                {console.log(usuario.filiaisPermitidas)} 
                                {usuario.filiaisPermitidas.length > 3 ?
                                usuario.filiaisPermitidas.slice(0,3).join(', ') + '...' :
                                usuario.filiaisPermitidas.join(', ')}
                            </TableCell>
                            <TableCell sx={{color:"text.secondary"}} align="center">{usuario.status ? 'Ativo' : 'Inativo'}</TableCell>
                            <TableCell> 
                                <Button sx ={{padding:'0'}}>
                                    {<EditIcon sx={{width:"100%",color:'icon.primary', backgroundColor:'background.icon', borderRadius:'10px', borderStyle:'solid', borderWidth:'3px'}} />}
                                </Button>
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>

            </Table>
            
          </TableContainer>
          
        </Modal>
    )
}

export default UsuariosCadastrados