import AsyncStorage from "@react-native-async-storage/async-storage"


export default class AsyncStorageClient {
    get = async (tableName) => {
        const data = await AsyncStorage.getItem(tableName)
        console.log("PARSE ", JSON.parse(data))
        return data ? JSON.parse(data) : null
    }

    set = async (tableName, data) => {
        console.log(JSON.stringify(data))
        return AsyncStorage.setItem(tableName, JSON.stringify(data))
    }

    removeAll = async (tableName) => {
        return AsyncStorage.removeAll(tableName)
    }
}