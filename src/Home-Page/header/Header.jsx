import React from "react";
import './style.css';
export function Header(props){
    return(
        <div className="header">
            <input type="text" className="input" placeholder="What needs to be done?"/>
            <button className="addBtn">
            <i class=" navBar--icon-2 fal fa-plus-circle"></i>
            ADD
            </button>
        </div>
    )
}