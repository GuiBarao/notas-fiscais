import httpsInstance from "../url";

const buscaFiliais = async () => {

    const https = httpsInstance()
    
    try {
        console.log(https.toString())
        const response = await https.get('/filiais');

        return response.data;
    }
    catch(error) {
        throw Error("Erro no carregamento das filiais: ", error);
    }

    
}

export default buscaFiliais;