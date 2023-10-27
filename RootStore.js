import { FixerStore } from "./modules/fixer/FixerStore";
import { TodoStore } from "./modules/todo/TodoStore";
import React, { useEffect, useState } from 'react';

class RootStore {
    todoStore;
    fixerStore;

    constructor() {
        this.todoStore = new TodoStore();
        this.fixerStore = new FixerStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);