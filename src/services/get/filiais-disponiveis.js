import httpsInstance from "../url";

const buscaFiliais = async () => {
    const https = httpsInstance()
    const token = sessionStorage.getItem("token")

    if(!token) {
        throw new Error("Ação não autorizada")
    }

    try {
        const response = await https.get('/filiais', {"headers": 
            {"authorization": `Bearer ${token}`}
        });

        return response.data;
    }
    catch(error) {
        throw new Error("Erro no carregamento das filiais: " + error);
    }

    
}

export default buscaFiliais;