import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers:{
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*'  
    }
})

export default axiosInstance;