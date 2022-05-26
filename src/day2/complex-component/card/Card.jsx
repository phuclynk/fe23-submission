import React from "react";
import {ColorBox} from "../color-box/ColorBox";
import {Label} from "../label/Label";
import './Card.css'

export function Card(p){
    return <div className="card">
        <ColorBox color="#FF6663"/>
        <Label color="#FF6663" />
    </div>
}