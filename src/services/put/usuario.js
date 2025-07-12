import url from '../url.js'

const atualizaUsuario = async (idUsuario, cpf, nomeUsuario, nomeCompleto, senha, filiaisPermitidas, status) => {
    const http = url()
    const auth = {"authorization" : `${sessionStorage.getItem("token_type")} ${sessionStorage.getItem("token")}`}
    const body = {  id: parseInt(idUsuario), 
                    ...(cpf && {cpf}),
                    ...(nomeUsuario && {nomeUsuario}),
                    ...(nomeCompleto && {nomeCompleto}),
                    ...(senha && {senha}),
                    ...(filiaisPermitidas && {filiaisPermitidas}),
                    ...(typeof status === 'boolean' && {status}) }

    const response = await http.put("/users", body, {headers: auth})

    return response.data

}

export default atualizaUsuario