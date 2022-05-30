import React from 'react';

export function TodoListHeader(props) {
    return (
        <div  className="todo-list-header">
            {props.title}
        </div>
    )
}