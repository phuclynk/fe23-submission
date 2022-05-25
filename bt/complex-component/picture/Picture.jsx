import React from "react";
import './style.css';

export function Picture(props) {

    return <div className="picture">
        <img className="image" src={props.picture} alt={props.picture} />
    </div>
}   