import { TodoModel } from "./TodoModel";
import TodoRepository from "./TodoRepository";

export default class TodoService {
    todoRepository;

    constructor() {
        this.todoRepository = new TodoRepository();
    }

    getAndPrepareDataForStore = () => {
        const data = this.todoRepository.getDataFromExternalStorage();

        const todoList = data.todos.map(todoData => {
            return new TodoModel(todoData.text, todoData.isCompleted);
        });
        return todoList;
    }

    addTodo = (todoList, text) => {
        const newTodo = new TodoModel(text);
        todoList.push(newTodo);
        return todoList
    }

    deleteTodo = (todoList, index) => {
        todoList.splice(index, 1);
        return todoList
    }

    deleteAllTodos = () => {
        return []
    }

    completeTodo = (todoList, index) => {
        todoList[index].isCompleted = !todoList[index].isCompleted;
        return todoList
    }

    getCompletedTodos = (todoList) => {
        return todoList.filter(item => item.isCompleted)
    }

}