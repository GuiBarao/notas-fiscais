import CampoValor from "../../../components/CampoValor/index.js";
import mudar_valorTeto from "../../../services/put/valor-teto.js";
import { useState } from "react";
const EdicaoValorTeto = ({setEdicaoValorTeto, nome_filial, atualizaAcordeaoFilial}) => {

    const [novoValor, setNovoValor] = useState("");

    const edita_valorTeto = async (nome_filial) => {
       
        try {
            const response = await mudar_valorTeto(nome_filial, novoValor)
            return response;
        }
        catch(error) {
            console.error(error)
        }
    }

    const style = "fixed z-10 flex flex-col gap-8 w-6/12 items-center bg-main_color " +
            "color-main_text_color p-2 ml-5 mt-1 rounded-lg self-center " +
            "border-solid border-border_input_color border-[2px]";

    const style_botoes = "p-1 w-auto bg-background_input_color border-solid text-main_text_color rounded-lg text-base border-border_input_color"

    return (
       
        <div className={style}>
            <div className="flex flex-row gap-2 self-end">

                <button className= {style_botoes + " hover:bg-main_color"}
                    onClick={async () => {await edita_valorTeto(nome_filial); 
                                setEdicaoValorTeto({ativado : false, filial: ""});
                                atualizaAcordeaoFilial(nome_filial, novoValor);}
                            }>
                    Salvar
                </button>

                <button className={style_botoes + " hover:bg-destaque_nota_invalida"} onClick={() => setEdicaoValorTeto({ativado : false, filial: ""})}>
                    Fechar
                </button>
            </div>
            <h1 className="text-main_text_color ">Digite o valor teto da filial {nome_filial}</h1>
            {console.log("Valor: " + novoValor)}
            <CampoValor onChange={(ev) => {setNovoValor(ev.target.value)}} value={novoValor} />
            

        </div>
    
    )
}


export default EdicaoValorTeto;