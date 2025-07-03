import httpsInstance from "../url";

const buscarNotas = async (filial_nome) => {

    const https = httpsInstance()
    const token = sessionStorage.getItem("token")

    if(!token) {
        throw Error("Ação não autorizada")
    }
    
    try {
        const response = await https.get(`/filiais/${filial_nome}/notas`, {"headers":{
            "authorization": `Bearer ${token}`
        }});

        return response.data;
    }
    catch(error) {
        throw new Error("Erro no carregamento das notas: " + error);
    }

    
}

export default buscarNotas;