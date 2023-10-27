import { axiosClient } from "../../utils/fixer/axiosClient"
import { accessKey } from "../../utils/fixer/getParams";
import { symbols } from "../../utils/fixer/getParams";
import { FixerModel } from "./FixerModel";

export default class FixerRepository {
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