import React from "react";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import './style.css';

export function Body(){
    return(
        <div className="list">
            <Header/>
            <Main
            text1 = "To Do List"
            text2 = "Test React Ant Design To Do List"
            text3 = "Write about React and Ant Design"
            text4 = "Finalize Presentation"
            text5 = "Book Flights To Iceland"
            />
        </div>
    )
}