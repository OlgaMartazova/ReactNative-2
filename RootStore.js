import { TodoStore } from "./modules/todo/TodoStore";
import React, { useEffect, useState } from 'react';

class RootStore {
    todoStore;

    constructor() {
        this.todoStore = new TodoStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);