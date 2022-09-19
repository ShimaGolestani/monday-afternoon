import axios from "axios"
const baseURL = 'api/v1'; // linkesho dorost konid

const axiosInstance = axios.create({
    baseURL
});

axiosInstance.interceptors.request.use(async function (config) {
    const token = localStorage.getItem('accessToken')
    
    config.headers.Authorization = `${token}`
    config.headers.responseType = "application/json"
    //config.headers["Cache-Control"] = "no-cache"        
    return config;
});

export default axiosInstance;
