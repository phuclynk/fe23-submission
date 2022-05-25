import React from "react";
import "./style.css";
import { Card } from "./card/Card";
import { ButtonLarge } from "./button-large/Button";
import { InputLarge } from "./input-large/Input";

export function TodoList(props) {
    return <div>
        <div className="inline-row">
            <InputLarge placeholder="What needs to be done?"></InputLarge>
            <ButtonLarge text="Add"></ButtonLarge>
        </div>
        <Card></Card>
    </div>;
}