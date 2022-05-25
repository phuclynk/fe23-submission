import React from "react";
import { ColorBox } from "../color-box/ColorBox";
import { Label } from "../label/Label";
import "./style.css"

export function Card() {
    return (
        <div className="card">
        <ColorBox color="#FF6663"/>
        <Label label="#FF6663"/>
        </div>
    )
}