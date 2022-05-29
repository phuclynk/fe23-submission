import React from 'react';
import './form.css'

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, status }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        if(inputText == ''){
            alert('Please enter your jobs into input!')
        }else{
            e.preventDefault();
            setTodos([
                {text: inputText , completed: false, id: Math.random()*1000},
                ...todos
            ]);
            setInputText("");
        }
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    const deleteDemo = document.querySelector('.todo-list-2');
    function hiddenClient() {
        deleteDemo.classList.add('remove')
    }


    return (
        <>
            <form>
                <input
                onKeyDown={hiddenClient}
                    placeholder='What needs to be done?'
                    type="text"
                    className="todo-input"
                    value={inputText}
                    onChange={inputTextHandler}
                />
                <button
                    type="submit"
                    className="todo-button"
                    onClick={submitTodoHandler}
                > ADD
                    <i className="fas fa-plus-square" />
                </button>
                <div
                    className="select"
                    onChange={statusHandler}
                >
                    <select
                        className="filter-todo"
                        name="todos"
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </>
    )
};

export default Form;