import AcordeaoFilial from "../../components/AcordeaoFilial/AcordeaoFilial.js";
import CampoFiltro from "../../components/CampoFiltro/CampoFiltro.js";
import Cabecalho from "../../components/Cabecalho/Cabecalho.js";
import { useState, useEffect } from "react";
import buscaFiliais from "../../services/get/filiais-disponiveis.js"
import EdicaoValorTeto from "../../components/Edicao/EdicaoValorTeto/index.js";


function NFSE() {

    //Opcionais
    const [filtroTitular, setFiltroTitular] = useState("");
    const [filtroCpf, setFiltroCpf] = useState("");

    const [filtroNumero, setFiltroNumero] = useState("");

    const [filtroValorMin, setFiltroValorMin] = useState("");
    const [filtroValorMax, setFiltroValorMax] = useState("");

    const [filtroStatus, setFiltroStatus] = useState("");

    //Obrigatórios
    const [filtroFiliais, setFiltroFiliais] = useState([]);
    const [filtroDataInicio, setFiltroDataInicio] = useState(null);
    const [filtroDataFim, setFiltroDataFim] = useState(null);

    const [edicaoValorTeto, setEdicaoValorTeto] = useState({ativado: false, nome_filial: ""})


    const [filiais, setFiliais] = useState([]);

    const carregar_filiais = async () => {
        try {
            const response = await buscaFiliais();
            setFiliais(response);
        }
        catch(error) {
            console.error(error);
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
                dataFimValue = {filtroDataFim} dataFimOnChange = {setFiltroDataFim}/>

                

            
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
        </section>
    );
}

export default NFSE;

