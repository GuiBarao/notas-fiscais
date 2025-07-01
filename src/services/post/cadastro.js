import httpsInstance from "../url";

const cadastro = async (cpf, nomeCompleto, nomeUsuario, filiais) => {
    const https = httpsInstance()
    try {
        const response = await https.post('/users', 
            {"cpf" : cpf, "nomeCompleto" : nomeCompleto, "nomeUsuario": nomeUsuario, "filiaisPermitidas":filiais});

        return response.data;
    }
    catch(error) {
        throw new Error("Erro no cadastro: " + error);
    }

}

export default cadastro;