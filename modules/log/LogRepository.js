import AsyncStorageClient from "../../utils/AsyncStorageSlient"

export default class LogRepository {
    storageClient = null;
    tableName = null;

    constructor(tableName) {
        this.storageClient = new AsyncStorageClient()
        this.tableName = tableName
    }

    getItems = () => {
        return this.storageClient.get(this.tableName)
    }

    setItems = data => {
        return this.storageClient.set(this.tableName, data)
    }

    removeItems = () => {
        return this.storageClient.removeAll(this.tableName)
    }
}