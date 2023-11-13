import FixerRepository from "./FixerRepository";

export default class FixerService {
    fixerRepository;

    constructor() {
        this.fixerRepository = new FixerRepository();
    }

    getAndPrepareDataForStore = async () => {
        const data = this.fixerRepository.getDataFromExternalStorage();
        return (await data).fixer
    }

    getData = async () => {
        const result = await this.fixerRepository.getItems();
        return result.data;
    }

    getFormattedRates = (rates) => {
        return Object.entries(rates).map(([currency, value]) => `${currency} ${value.toFixed(2)}`);
    }
}