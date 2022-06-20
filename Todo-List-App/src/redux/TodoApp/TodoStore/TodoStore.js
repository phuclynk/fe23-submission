import { action, autorun, computed, makeAutoObservable, makeObservable, observable, reaction, toJS, when } from "mobx"
import { useEffect } from "react";

class TodoStore {
    todoList = []

    constructor() {
        makeAutoObservable(this, {
            todoList: observable,
            updateTodoList: action,
            listLength: computed,
        })


    }

    updateTodoList(newTodoList) {
        this.todoList = newTodoList;
    }

    get listLength() {
        return this.todoList.length
    }


}

export const todoStore = new TodoStore();

// Chạy khi bất kỳ observable state thay đổi
autorun(() => {
})

// Chạy khi giá trị ở tham số đầu tiên thay đổi
reaction(
    // Khi value được trả về ở tham số thứ nhất thay đổi
    () => todoStore.todoList,
    // function ở tham số thứ 2 được thực thi
    (todoList, previousTodoList) => {
    }
)

// chạy duy nhất 1 lần khi giá trị được trả về ở tham số thứ nhất === true
// 

