import React from 'react';
import {TodoListHeader} from './header/TodoListHeader'
import {TodoListItem} from './todo-list-item/TodoListItem'
import {AddToDoItem} from '../add-todo-item-form/AddTodoItemForm'
import './style.css'




export function ToDoListPanel() {
    const todoListData = [
        {done: false, description: "Test React Ant Design Todo List"},
        {done: false, description: "Write About React And Ant Design"},
        {done: true,  description: "Finalize Presentation"},
        {done: false, description: "Book Flights To Ireland"},
    ]
    return (
        <div className='todoList__todoListPanel'>
            <TodoListHeader  title="To Do List"/>
            <div className='todoList__listItemWrapper'>
                {todoListData.map((item, index) => {
                    return (
                    <TodoListItem
                        key={index}
                        done = {item.done}
                        description = {item.description}
                    />
                    );
                })}
            </div>
        </div>
    )
}