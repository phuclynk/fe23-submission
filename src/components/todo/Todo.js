import React from 'react';
import './todo.css'

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <>
            <div className="todo">
                <button
                    className="complete-btn"
                    onClick={completeHandler}
                >
                    <i className="fas fa-check" />
                </button>
                <li
                    className={`todo-item ${todo.completed ? 'completed' : ''}`}
                >
                    { text }
                </li>
                <button
                    className="trash-btn"
                    onClick={deleteHandler}
                >
                    <i className="fas fa-trash" />
                </button>
            </div>
        </>
    )
};

export default Todo;