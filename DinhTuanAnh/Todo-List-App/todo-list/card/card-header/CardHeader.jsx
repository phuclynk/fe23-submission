import React from "react";
import "./style.css";

export function CardHeader(props) {
    return <div className="card-header">{props.title}</div>;
}