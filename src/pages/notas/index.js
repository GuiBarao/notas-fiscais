import AcordeaoFilial from "./AcordeaoFilial";
import CampoFiltro from "./CampoFiltro";
import Cabecalho from "./Cabecalho";
import { useState, useEffect, useCallback } from "react";
import buscaFiliais from "../../services/get/filiais-disponiveis.js"
import EdicaoValorTeto from "./EdicaoValorTeto";
import ControleUsuario from "./ControleUsuario"
import Cadastro from "./Cadastro";
import { HttpStatusCode } from "axios";
import { useNavigate } from 'react-router-dom'
import UsuariosCadastrados from "./UsuariosCadastrados"
import AtualizarDadosUsuario from './AtualizarDadosUsuario'
import buscarUsuarios from '../../services/get/usuarios.js'
import { useSnackbar } from 'notistack';


function NotasPage() {

    //Filtros opcionais
    const [filtroTitular, setFiltroTitular] = useState("");
    const [filtroCpf, setFiltroCpf] = useState("");

    const [filtroNumero, setFiltroNumero] = useState("");

    const [filtroValorMin, setFiltroValorMin] = useState("");
    const [filtroValorMax, setFiltroValorMax] = useState("");

    const [filtroStatus, setFiltroStatus] = useState("");

    //Filtros obrigatórios
    const [filtroFiliais, setFiltroFiliais] = useState([]);
    const [filtroDataInicio, setFiltroDataInicio] = useState(null);
    const [filtroDataFim, setFiltroDataFim] = useState(null);

    const [edicaoValorTeto, setEdicaoValorTeto] = useState({ativado: false, nome_filial: ""})

    const [modalUsuario, setModalUsuario] = useState(false)
    const [modalCadastro, setModalCadastro] = useState(false)
    const [modalUsuariosCadastrados, setUsuariosCadastrados] = useState(false)
    const [modalAtualizarUsuario, setModalAtualizarUsuario] = useState({ativo: false, usuario: null})

    const [filiais, setFiliais] = useState([]);

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();


    const carregar_filiais = useCallback( async () => {
        try {
            const response = await buscaFiliais();
            setFiliais(response);
        }
        catch(error) {

            if(error.status === HttpStatusCode.Unauthorized) {
                enqueueSnackbar("Ação não autorizada", { variant: "error" });
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }
            else {
                enqueueSnackbar("Erro ao carregar as filiais", { variant: "error" });
            }
        }
    }, [navigate])

    useEffect(() => {carregar_filiais()}, [carregar_filiais]);

    const recarregarFilial = (nomeFilial, novoValor) => {
        setFiliais((prev) => prev.map((filial) => 
            filial.nomeFilial === nomeFilial 
                ? {...filial, valorTeto: parseFloat(novoValor)}
                : filial
        ))
    }

    
    const filiaisFiltradas = filiais.filter((filial) => filtroFiliais.includes(filial.nomeFilial));

    const style_overlay = "fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-[1000]"
    
    const [usuarios, setUsuarios] = useState([])

    const getUsuarios = async () => {
        try{
            const response = await buscarUsuarios()
            setUsuarios(response)
        }
        catch (error) {
            error.status === HttpStatusCode.Unauthorized ?
                enqueueSnackbar('Ação não autorizada', { variant: "error" }) :
                enqueueSnackbar('Erro ao carregar os usuários', { variant: "error" })

        }
    }

    const recarregarUsuarios = (usuarioAtualizado) => {
        setUsuarios((prev) => prev.map((usuario) => 
            usuario.id === usuarioAtualizado.id
                ? usuario = usuarioAtualizado
                : usuario
        ))
    }

    useEffect(() => {
        modalUsuariosCadastrados && getUsuarios()
    }, [modalUsuariosCadastrados])


    return (
        
        <section className= "flex flex-row w-full h-full">
            
            <CampoFiltro     
                            filtroTitular = {filtroTitular} filtroCpf= {filtroCpf} 
                            filtroNumero= {filtroNumero} filtroValorMin= {filtroValorMin} 
                            filtroValorMax= {filtroValorMax}  filtroStatus= {filtroStatus}
                            setFiltroTitular= {setFiltroTitular}  setFiltroCpf= {setFiltroCpf} 
                            setFiltroNumero= {setFiltroNumero} setFiltroValorMin= {setFiltroValorMin} 
                            setFiltroValorMax= {setFiltroValorMax}  setFiltroStatus = {setFiltroStatus}/>
            
            <div className= "flex flex-col w-full h-full gap-8 ml-96">
                
                <Cabecalho filiais = {filiais} filtroFiliaisValue = {filtroFiliais} filtroFiliaisOnChange={setFiltroFiliais}
                dataInicioValue = {filtroDataInicio} dataInicioOnChange = {setFiltroDataInicio} 
                dataFimValue = {filtroDataFim} dataFimOnChange = {setFiltroDataFim} 
                onChangeModalUsuario={setModalUsuario}/>

                

            
                <div className="flex flex-col gap-8">

                    {edicaoValorTeto.ativado && <EdicaoValorTeto    setEdicaoValorTeto={setEdicaoValorTeto} 
                                                                    nome_filial={edicaoValorTeto.nome_filial}
                                                                    atualizaAcordeaoFilial={recarregarFilial}/>}


                    {filiaisFiltradas.map( (filial) => {
                        return <AcordeaoFilial  filial={filial.nomeFilial} 
                                                valor_teto={filial.valorTeto} 
                                                key={filial.nomeFilial}
                                                filtroDataInicio={filtroDataInicio}
                                                filtroDataFim={filtroDataFim}
                                                filtroTitular={filtroTitular}
                                                filtroCPF={filtroCpf}
                                                filtroStatus={filtroStatus}
                                                filtroNumero={filtroNumero}
                                                filtroValorMin= {filtroValorMin}
                                                filtroValorMax= {filtroValorMax}
                                                setEdicaoValorTeto={setEdicaoValorTeto}
                                                />
                    })}
                </div>
            </div>

            {edicaoValorTeto.ativado && <div className={style_overlay}></div>}

            <ControleUsuario    open={modalUsuario} 
                                onChangeModalUsuario={setModalUsuario}
                                onChangeModalUsuariosCadastrados={setUsuariosCadastrados} />

            
            <UsuariosCadastrados open={modalUsuariosCadastrados} 
            onClose={() => {setUsuariosCadastrados(false)}}
            usuarios={usuarios}
            onChangeModalCadastro={setModalCadastro}
            onChangeModalAtualizarUsuario={setModalAtualizarUsuario}/>

            <Cadastro   filiais={filiais.map((filial) => filial.nomeFilial)}
                        open={modalCadastro} 
                        onClose={() => {setModalCadastro(false)}}/>

            <AtualizarDadosUsuario  open={modalAtualizarUsuario.ativo}
                                    usuarioEscolhido={modalAtualizarUsuario.usuario}
                                    filiais={filiais.map((filial) => filial.nomeFilial)}
                                    onClose={() => {setModalAtualizarUsuario({ativo:false, usuario:null})}}
                                    atualizaListaUsuarios={recarregarUsuarios}/>

        </section>
    );
}

export default NotasPage;

