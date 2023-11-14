import { FixerStore } from "./modules/fixer/FixerStore";
import { LogStore } from "./modules/log/LogStore";
import { TodoStore } from "./modules/todo/TodoStore";
import React, { useEffect, useState } from 'react';

class RootStore {
    todoStore;
    fixerStore;
    logStore;

    constructor() {
        this.todoStore = new TodoStore();
        this.fixerStore = new FixerStore();
        this.logStore = new LogStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);