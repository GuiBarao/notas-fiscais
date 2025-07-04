import httpsInstance from "../url";

const mudar_valorTeto = async (nome_filial, novo_valor) => {
    const https = httpsInstance()
    const token = sessionStorage.getItem("token")

    const response = await https.put('/filiais/valor_teto', 
        {"nomeFilial" : nome_filial, "valorTeto" : novo_valor},
        {"headers": {"authorization": `Bearer ${token}`}});

    return response.data;

}

export default mudar_valorTeto;