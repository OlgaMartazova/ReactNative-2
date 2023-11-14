import AsyncStorage from "@react-native-async-storage/async-storage"
import { LogModel } from "../modules/log/LogModel"

export default class AsyncStorageClient {
    get = async (tableName) => {
        const data = await AsyncStorage.getItem(tableName)
        listOfData = data ? JSON.parse(data).map(item => new LogModel(item.text, item.timestamp)) : []
        console.log("listOfData", listOfData)
        return listOfData
    }

    set = async (tableName, data) => {
        return AsyncStorage.setItem(tableName, JSON.stringify(data))
    }

    removeAll = async (tableName) => {
        return AsyncStorage.removeItem(tableName)
    }
}