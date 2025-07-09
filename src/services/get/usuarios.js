import httpsInstance from "../url";

const buscarUsuarios = async () => {
    const https = httpsInstance()

    const tokenType = sessionStorage.getItem("token_type") 
    const token = sessionStorage.getItem("token")
    const access_token = `${tokenType} ${token}`

    const headersData = {"authorization" : access_token}
    const response = await https.get('/users', {"headers": headersData})

    return response.data
}

export default buscarUsuarios