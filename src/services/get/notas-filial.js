import httpsInstance from "../url";

const buscarNotas = async (filial_nome) => {

    const https = httpsInstance()
    
    try {
        const response = await https.get(`/filiais/${filial_nome}/notas`);

        return response.data;
    }
    catch(error) {
        throw Error("Erro no carregamento das notas: ", error);
    }

    
}

export default buscarNotas;