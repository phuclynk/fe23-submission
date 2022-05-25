import React from "react";
import './style.css'

export function Footer(props) {
    return <div className="footer">
        <img className="image" src={props.footer} alt={props.footer} />
    </div>
}