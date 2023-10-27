import axios from "axios"

export const axiosClient = axios.create({
    baseURL: 'http://data.fixer.io/api', 
    timeout: 10000,
})