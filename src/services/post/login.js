import httpsInstance from "../url";

const login = async (cpf, senha) => {
    const https = httpsInstance()
    const dados = new URLSearchParams()
    dados.append("username", cpf)
    dados.append("password", senha)
    
    const response =  await https.post("users/token", dados, {
    "headers" : {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    })

    return response.data
    
}

export default login