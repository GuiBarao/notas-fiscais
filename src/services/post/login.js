import httpsInstance from "../url";

const login = async (cpf, senha) => {
    const https = httpsInstance()
    const dados = new URLSearchParams()
    dados.append("username", cpf)
    dados.append("password", senha) 

    try{
       const response =  await https.post("users/token", dados, {
        "headers" : {
            "Content-Type": "application/x-www-form-urlencoded"
        }
       })

       console.log(response.data.access_token)

       return response.data
    }
    catch(error) {
        throw new Error("Erro no login: " + error.message);
    }
}

export default login