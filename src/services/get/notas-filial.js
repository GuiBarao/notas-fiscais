import httpsInstance from "../url";

const buscarNotas = async (filial_nome) => {

    const https = httpsInstance()
    const token = sessionStorage.getItem("token")
    
 
    const response = await https.get(`/filiais/${filial_nome}/notas`, {"headers":{
        "authorization": `Bearer ${token}`
    }});

    return response.data;
    

    
}

export default buscarNotas;