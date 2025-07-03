import httpsInstance from "../url";

const cadastro = async (cpf, nomeCompleto, nomeUsuario, filiais) => {
    const https = httpsInstance()
    const token = sessionStorage.getItem("token")
    if(!token) {
        throw Error("Ação não autorizada")
    }

    const response = await https.post('/users', 
        {"cpf" : cpf, "nomeCompleto" : nomeCompleto, "nomeUsuario": nomeUsuario, "filiaisPermitidas":filiais}, 
        {"headers": {"authorization": `Bearer ${token}`}});

    return response.data;
}

export default cadastro;