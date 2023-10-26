import { TodoModel } from "./TodoModel";


export default class TodoRepository {
    getDataFromExternalStorage = () => {

        const todoModels = [
            new TodoModel("do homework"),
            new TodoModel("jojoj"),
        ];

        return {
            todos: todoModels
        }
    }
}