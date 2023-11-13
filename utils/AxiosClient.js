import axios from "axios"
import { BASE_URL } from "./fixer/getParams";

// export const axiosClient = axios.create({
//     baseURL: 'http://data.fixer.io/api', 
//     timeout: 10000,
// })

export default class AxiosClient {
    static SUCCESS_STATUSES = [200, 201]; // readonly static SERVER_ERROR = 500; // readonly
    api; // AxiosInstance; 

    constructor(config) {
        this.api = axios.create(config);
        this.api.defaults.baseURL = this.getDefaultBaseUrl();
        this.api.defaults.headers.common['App-Platform'] = Platform.OS;
        this.api.defaults.headers.common['Content-Type'] = 'application/json';
    }
    getDefaultBaseUrl = () => {
        return BASE_URL;
    };

    get = config => {
        return this.api.get(config.url, config.config);
    };
}