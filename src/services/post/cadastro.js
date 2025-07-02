import httpsInstance from "../url";

const cadastro = async (cpf, nomeCompleto, nomeUsuario, filiais) => {
    const https = httpsInstance()
 
    const response = await https.post('/users', 
        {"cpf" : cpf, "nomeCompleto" : nomeCompleto, "nomeUsuario": nomeUsuario, "filiaisPermitidas":filiais});

    return response.data;
}

export default cadastro;