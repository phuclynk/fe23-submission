import React from "react";
import "./todo/Todo";

export function TodoColor(){    
    const todoColorStyle = {
        alignItem: 'center'
    }
    return <div style={todoColorStyle}>
        <Todo/>
    </div>
}