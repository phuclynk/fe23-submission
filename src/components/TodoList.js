import React from 'react';
import Todo from './todo/Todo';
import './todoList.css'

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <Todo
                            todos={todos}
                            setTodos={setTodos}
                            text={todo.text}
                            key={todo.id}
                            todo={todo}
                        />
                    ))}
                    <ul className='todo-list-2'>
                        <div className='todo'>
                        <button className="complete-btn"><i className="fas fa-check"></i></button>
                        <li className="todo-item ">Test React Ant Design Todo List</li>
                        <button className="trash-btn"><i className="fas fa-trash"></i></button>
                        </div>

                        <div className='todo'>
                        <button className="complete-btn"><i className="fas fa-check"></i></button>
                        <li className="todo-item ">Write About React And Ant Design</li>
                        <button className="trash-btn"><i className="fas fa-trash"></i></button>
                        </div>

                        <div className='todo'>
                        <button className="complete-btn"><i className="fas fa-check"></i></button>
                        <li className="completed todo-item ">Finalize Presentation</li>
                        <button className="trash-btn"><i className="fas fa-trash"></i></button>
                        </div>

                        <div className='todo'>
                        <button className="complete-btn"><i className="fas fa-check"></i></button>
                        <li className="todo-item ">Books Flight To Ireland</li>
                        <button className="trash-btn"><i className="fas fa-trash"></i></button>
                        </div>
                    </ul>
                </ul>
            </div>
        </>
    )
};

export default TodoList;