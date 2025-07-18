import logoPax from '../../assets/svg/logo-pax-verde.svg'
import packageJSON from "../../../package.json"
import { useState } from "react"
import login from "../../services/post/login.js"
import { useNavigate } from 'react-router-dom';
import { HttpStatusCode } from 'axios';
import { useSnackbar } from 'notistack';


function LoginPage() {

    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar();
    
    const enviar_login = async () => {
        
        if(!cpf) {
            enqueueSnackbar('Digite um CPF', {variant: "warning"});
            return
        }
        if(!senha) {
            enqueueSnackbar('Digite a senha', {variant: "warning"});
            return
        }
        
        try{
            const response = await login(cpf, senha)

            sessionStorage.setItem("token", response.access_token)
            sessionStorage.setItem("token_type", response.token_type)
            sessionStorage.setItem("cpf", response.cpf)
            sessionStorage.setItem("nomeCompleto", response.nomeCompleto)
            sessionStorage.setItem("nomeUsuario", response.nomeUsuario)
            sessionStorage.setItem("filiaisPermitidas", response.filiaisPermitidas)

            enqueueSnackbar('Login realizado com sucesso!', {variant: "success"});

            setTimeout(
                () => {
                    navigate("/notas")
                }, 2000
            )
        }
        catch(error) {
            error.status === HttpStatusCode.Unauthorized ? 
                enqueueSnackbar('CPF ou senha incorretos', {variant: "error"}) :
                enqueueSnackbar("Erro ao realizar o login: " + error.message, {variant: "error"})
            }
    }
        
    
    
    return (

        <div className=" flex h-screen items-center justify-center bg-green-950">


            <div className="relative bg-green-50 p-8 rounded-lg shadow-lg w-96 content-center">
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
                    className="w-full h-10 bg-gray-300 text-green-950 p-2 bg-custom-green"
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