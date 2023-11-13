import AxiosClient from "../../utils/AxiosClient";
import { accessKey } from "../../utils/fixer/getParams";
import { symbols } from "../../utils/fixer/getParams";
import { FixerModel } from "./FixerModel";

export default class FixerRepository {
    apiClient = null;

    constructor() {
        this.apiClient = new AxiosClient();
    }

    getItems = () => {
        return this.apiClient.get({
            url: '/api/latest?access_key=d157176a74a2a98f4e2fe38c6cbd1951&symbols=USD,AUD,RUB,PLN,MXN&format=1'
        });
    };

    getDataFromExternalStorage = async () => {

        try {
            const response = await axiosClient
                .get('/latest', {
                    params: {
                        access_key: accessKey,
                        symbols: symbols,
                        format: 1,
                    },
                });
            // Handle the response data here and create a FixerModel instance
            const fixerData = new FixerModel(
                response.data.success,
                response.data.timestamp,
                response.data.base,
                response.data.date,
                response.data.rates
            );
            return {
                fixer: fixerData
            }
        } catch (error) {
            // Handle any errors here
            console.error('Error:', error);
            throw error; // Optionally rethrow the error
        }
    }
}