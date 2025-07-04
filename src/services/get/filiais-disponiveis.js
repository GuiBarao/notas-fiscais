import httpsInstance from "../url";

const buscaFiliais = async () => {
    const https = httpsInstance()
    const token = sessionStorage.getItem("token")

    const response = await https.get('/filiais', {"headers": 
        {"authorization": `Bearer ${token}`}
    });

    return response.data;

    
}

export default buscaFiliais;