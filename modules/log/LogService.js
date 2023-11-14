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
        const timeStamp = Date.now()
        const date = new Date(timeStamp);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const formattedDate = `${hours}:${minutes}:${seconds} ${day}.${month}`;
        const newLog = new LogModel(data, formattedDate);
        logList.push(newLog);
        return this.logRepository.setItems(logList)
    }

    removeAllData = async () => {
        return this.logRepository.removeItems()
    }
}