import React from "react";
import './Color.css';

export function ColorBox(p){
    const colorBoxStyle = {
        backgroundColor: p.color
    }
    return <div style={colorBoxStyle} className="color-box"> </div>
}