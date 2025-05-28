import axios from "axios"

const API_URL = `${process.env.REACT_APP_BASE_API}`;

const httpsInstance = () => {
    
    const https = axios.create({
        baseURL : API_URL
    })

    return https
}

export default httpsInstance