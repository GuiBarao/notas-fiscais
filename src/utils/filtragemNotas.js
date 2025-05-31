import dayjs from "dayjs";

function filtragemNotas(nota, filtroNomeTitular, /*filtroCPF, filtroNumero, filtroValorMin, 
    filtroValorMax, filtroStatus,*/ dataInicial, dataFinal) {
    if( !nota.cliente.nome.toLowerCase().includes(filtroNomeTitular.toLowerCase()) && filtroNomeTitular !== ""){
        
        return false;
    }
  /*
    if(nota.cpf !== filtroCPF && filtroCPF !== ""){
        return false;
    }
  
    if(nota.numero !== filtroNumero && filtroNumero !== ""){
        return false;
    }
  

    if(nota.valor < parseInt(filtroValorMin) || nota.valor > parseInt(filtroValorMax)){
        return false;
    }

    if(!nota.status && filtroStatus === "Válido"){
        return false;
    }

    if(nota.status && filtroStatus === "Inválido"){
        return false;
    }*/

    if((dayjs(nota.data_cadastro).isBefore(dataInicial) || dayjs(nota.data_cadastro).isAfter(dataFinal)) 
        || (dataInicial === null || dataFinal === null)){
        return false;
    }

    return true;
}

export default filtragemNotas;