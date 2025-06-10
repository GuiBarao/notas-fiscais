import httpsInstance from "../url";

const mudar_valorTeto = async (nome_filial, novo_valor) => {
    const https = httpsInstance()
    try {
        const response = await https.put('/filiais/valor_teto', 
            {"nomeFilial" : nome_filial, "valorTeto" : novo_valor});

        return response.data;
    }
    catch(error) {
        throw new Error("Erro no carregamento das filiais: " + error);
    }

}

export default mudar_valorTeto;