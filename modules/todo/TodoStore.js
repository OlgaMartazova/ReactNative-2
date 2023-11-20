import { makeAutoObservable } from "mobx";
import TodoService from "./TodoService";


export class TodoStore {
    todoList = null;

    completedList = null;

    isLoading = false;

    todoService;

    constructor() {
        makeAutoObservable(this);
        this.todoService = new TodoService();
    }

    getTodosFromService = () => {
        const model = this.todoService.getAndPrepareDataForStore();
        this.setTodoList(model);
    }

    addTodo = (text) => {
        this.setIsLoading(true);
        const model = this.todoService.addTodo(this.todoList, text)
        this.setTodoList(model)

        this.setTimer()
    }

    completeTodo = (todo) => {
        this.setIsLoading(true);

        const model = this.todoService.completeTodo(this.todoList, todo)
        this.setTodoList(model)
        this.setCompletedList(this.getCompletedTodos())
        this.setTimer()
    }

    deleteTodo = (index) => {
        this.setIsLoading(true);

        const model = this.todoService.deleteTodo(this.todoList, index)
        this.setTodoList(model)

        this.setTimer()
    }

    deleteAllTodos = () => {
        this.setIsLoading(true)

        const model = this.todoService.deleteAllTodos()
        this.setTodoList(model)

        this.setTimer()
    }

    getCompletedTodos = () => {
        
        const completedModel = this.todoList == null ? [] : this.todoService.getCompletedTodos(this.todoList)
        return completedModel
    }

    setTodoList = value => {
        this.todoList = value
    }

    setCompletedList = value => {
        this.completedList = value
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