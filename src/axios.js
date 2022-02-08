import axios from "axios";

const BASE_URL = 'http://localhost:3000/api/'

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem("access_token") ? "JWT" + localStorage.getItem("access_token") : null,
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
})

export default axiosInstance