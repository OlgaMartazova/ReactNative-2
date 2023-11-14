import LogService from "./LogService";
import { makeAutoObservable } from "mobx";

export class LogStore {
    logData = []

    isLoading = false;

    logService;

    constructor() {
        makeAutoObservable(this);
        this.logService = new LogService('Logs')
    }

    getLogs = () => {
        this.logService
            .getData()
            .then(result => {
                this.setLogData(result)
            })
    }

    addLog = (data) => {
        this.setIsLoading(true)

        this.logService.setData(this.logData, data)
            .then(() => {
                this.setIsLoading(false)
            })
    }

    removeLogs = async () => {
        this.logService.removeAllData()
            .then(() => {
                this.setLogData([])
            })
    }

    setLogData = value => {
        this.logData = value
    }

    setIsLoading = value => {
        this.isLoading = value
    }

    setTimer = () => setTimeout(
        () => {
            this.setIsLoading(false);
        }, 0
    )
}