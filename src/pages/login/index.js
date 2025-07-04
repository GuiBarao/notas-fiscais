import fundoPax from '../../assets/png/multiple_x.png'
import logoPax from '../../assets/svg/logo-pax-verde.svg'
import { IconButton } from '@mui/material';
import { HelpOutline } from '@mui/icons-material';
import packageJSON from "../../../package.json"
import { useState } from "react"
import login from "../../services/post/login.js"
import { useNavigate } from 'react-router-dom';
import CustomToast from '../../components/toast/index.js'
import { HttpStatusCode } from 'axios';

function LoginPage() {

    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    const enviar_login = async () => {
        
        if(!cpf) {
            CustomToast({type:"warning", message: "Digite um CPF"})
            return
        }
        if(!senha) {
            CustomToast({type:"warning", message: "Digite a senha"})
            return
        }
        
        try{
            const response = await login(cpf, senha)

            sessionStorage.setItem("token", response.access_token)
            sessionStorage.setItem("token_type", response.token_type)
            sessionStorage.setItem("cpf", response.cpf)
            sessionStorage.setItem("nomeCompleto", response.nomeCompleto)
            sessionStorage.setItem("nomeUsuario", response.nomeUsuario)

            CustomToast({type:"success", message: "Login realizado com sucesso!"})

            setTimeout(
                () => {
                    navigate("/notas")
                }, 2000
            )
        }
        catch(error) {
            error.status === HttpStatusCode.Unauthorized ? 
                CustomToast({type:"warning", message: "CPF ou senha incorretos! "}) :
                CustomToast({type:"error", message: "Erro ao realizar o login: " + error.message})
        }
        
    }
    
    return (

        <div className=" flex h-screen items-center justify-center animate-background">

            <div className="fixed bottom-0 right-0 z-0 top-0 flex justify-center items-center">
                <img src={fundoPax} alt="Fundo" style={{width: '500px', height: '90vh'}}/>
            </div>

            <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full z-10">
                <div className="flex justify-center mb-10">
                    <img src={logoPax} alt="Logo" className="w-28" />
                </div>
                <input
                    type="text"
                    placeholder='CPF'
                    id='login'
                    value = {cpf}
                    onChange={(ev) => {setCpf(ev.target.value)}}
                    autoComplete='off'
                    className="cpf-input w-full p-3 mb-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="relative w-full mb-4">
                    <input
                        id='senha'
                        type='password'
                        value = {senha}
                        onChange={(ev) => {setSenha(ev.target.value)}}
                        placeholder="Senha"
                        className="password-input w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer opacity-25"
                    >
                    </div>
                </div>
                <button
                    id='entrar'
                    className="w-full h-10 bg-[#006B33] text-white p-2 rounded-md bg-custom-green"
                    onClick={enviar_login}
                >
                    Entrar
                </button>

                <div className="text-center mt-10">
                    <p> Versão {packageJSON.version}</p>
                </div>
            </div>
        </div>  
    )
}

export default LoginPage