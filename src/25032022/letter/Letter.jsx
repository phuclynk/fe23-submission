import React from "react";
// import "./letter.css";
import "../styling.css";

export function Letter(props) {
    // const textStyle = {color: "blue", fontSize: 40, marginTop: 40, fontWeight: "bold"}
    return (
        <div className={"letter"}>{props.children}</div>
    )
}