import React from "react";
import './Label.css';

export function Label(p){
    return <div className="label">
        {p.label}
    </div>
}