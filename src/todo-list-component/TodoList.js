import React from 'react';
import { ToDoListPanel } from './todo-list-panel/TodoListPanel';
import { AddToDoItem } from './add-todo-item-form/AddTodoItemForm';
import './style.css'



export function TodoList() {
    return (
        <div className='todoList'>
            <AddToDoItem/>
            <ToDoListPanel/>
        </div>
    )
}