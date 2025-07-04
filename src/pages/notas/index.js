import AcordeaoFilial from "./AcordeaoFilial";
import CampoFiltro from "./CampoFiltro";
import Cabecalho from "./Cabecalho";
import { useState, useEffect } from "react";
import buscaFiliais from "../../services/get/filiais-disponiveis.js"
import EdicaoValorTeto from "./EdicaoValorTeto";
import ControleUsuario from "./ControleUsuario"
import Cadastro from "./Cadastro";
import CustomToast from "../../components/toast"
import { HttpStatusCode } from "axios";
import { useNavigate } from 'react-router-dom'

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
    const [modalcadastro, setModalCadastro] = useState(false)
    

    const [filiais, setFiliais] = useState([]);

    const navigate = useNavigate();

    const carregar_filiais = async () => {
        try {
            const response = await buscaFiliais();
            setFiliais(response);
        }
        catch(error) {

            if(error.status === HttpStatusCode.Unauthorized) {
                CustomToast({type: "error", message: "Ação não autorizada"})
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }
            else {
                CustomToast({type:"error", message:"Erro ao carregar as filiais"})
            }
        }
    }

    useEffect(() => {carregar_filiais()}, []);

    const recarregarFilial = (nomeFilial, novoValor) => {
        setFiliais((prev) => prev.map((filial) => 
            filial.nomeFilial === nomeFilial 
                ? {...filial, valorTeto: parseFloat(novoValor)}
                : filial
        ))
    }

    
    const filiaisFiltradas = filiais.filter((filial) => filtroFiliais.includes(filial.nomeFilial));

    const style_overlay = "fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-[1000]"
    

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
                                onChangeModalCadastro={setModalCadastro} />
            
            <Cadastro   filiais={filiais.map((filial) => filial.nomeFilial)} 
                        open={modalcadastro} 
                        onClose={() => {setModalCadastro(false)}}/>


        </section>
    );
}

export default NotasPage;

