import { LogModel } from "./LogModel";
import LogRepository from "./LogRepository";

export default class LogService {
    logRepository;

    constructor(tableName) {
        this.logRepository = new LogRepository(tableName)
    }

    getData = async () => {
        return this.logRepository.getItems()
    }

    setData = async (logList, data) => {
        const newLog = new LogModel(data, Date.now());
        logList.push(newLog);
        return this.logRepository.setItems(logList)
    }

    removeAllData = async () => {
        return this.logRepository.removeItems()
    }
}