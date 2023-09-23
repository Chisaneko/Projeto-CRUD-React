import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:3400'
})

service.interceptors.request.use(config =>{
        config.headers.Authorization = localStorage.getItem("token")
        return config
})

function obterToken(){
    return localStorage.getItem("token")
}
export default service