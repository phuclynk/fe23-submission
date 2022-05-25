import React from "react";
import './style.css'

export function Text(props) {
    return <div className="text">
        {props.text}
    </div>
}