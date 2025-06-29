import httpsInstance from "../url";

const buscaFiliais = async () => {

    const https = httpsInstance()
    
    try {
        const response = await https.get('/filiais');

        return response.data;
    }
    catch(error) {
        throw new Error("Erro no carregamento das filiais: " + error);
    }

    
}

export default buscaFiliais;