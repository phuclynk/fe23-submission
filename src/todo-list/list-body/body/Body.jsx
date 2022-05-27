import React from "react";
import './Style.css';
import { Test } from './test/Test'
import { Write } from './write/Write'
import { Book } from './book/Book'

export function Body(){
    return <div className="BodyL">
        <Test />
        <Write />
        <Book />
    </div>
}