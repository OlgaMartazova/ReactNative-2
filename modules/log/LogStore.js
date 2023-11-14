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
        this.setIsLoading(true)

        this.logService
            .getData()
            .then(result => {
                this.setLogData(result)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                this.setIsLoading(false)
            })
    }

    addLog = (data) => {
        this.setIsLoading(true)

        this.logService.setData(this.logData, data)
        .then(() => {
            this.setIsLoading(false)
        })
    }

    removeLogs = () => {
        this.setIsLoading(true)
        this.logService.removeAllData()
        .then(() => {
            this.setLogData([])
        })
        .finally(() => {
            this.setIsLoading(false)
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