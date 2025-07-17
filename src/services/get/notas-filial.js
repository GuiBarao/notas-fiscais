import httpsInstance from "../url";

const buscarNotas = async (filial_nome, dataInicial, dataFinal) => {

    const https = httpsInstance()
    const token = sessionStorage.getItem("token")
    const token_type = sessionStorage.getItem("token_type")
    const auth = {"authorization": `${token_type} ${token}`}

    const params = {"nomeFilial": filial_nome, "dataInicial": dataInicial, "dataFinal": dataFinal}

    const response = await https.get(`/filiais/notas`, {"headers": auth, "params": params});

    return response.data;
    

    
}

export default buscarNotas;