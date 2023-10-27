import { makeAutoObservable } from "mobx";
import FixerService from "./FixerService";
import { FixerModel } from "./FixerModel";

export class FixerStore {
    fixerData = null;

    isLoading = false;

    fixerService;

    constructor() {
        makeAutoObservable(this);
        this.fixerService = new FixerService();
    }

    getTodosFromService = async () => {
        const model = this.fixerService.getAndPrepareDataForStore();

        // вроде как лучше данные форматировать в сервисе, 
        // но не получилось почему-то в сервисе создать объект FixerModel
        // чтобы избавиться от асинка

        const date = new Date((await model).date)
        // Format the date as "dd.MM.yyyy"
        const options = { day: "2-digit", month: "long", year: "numeric" };
        const formattedDate = date.toLocaleDateString("ru-Ru", options);

        const data = new FixerModel(
            (await model).success,
            (await model).timestamp,
            (await model).base,
            formattedDate,
            (await model).rates
        )
        this.setFixerData(data);
    }

    getRatesList = () => {
        return this.fixerService.getFormattedRates(this.fixerData.rates)
    }

    setFixerData = value => {
        this.fixerData = value
    }

    setIsLoading = value => {
        this.isLoading = value
    }

    setTimer = () => setTimeout(
        () => {
            this.setIsLoading(false);
        }, 500
    )
}