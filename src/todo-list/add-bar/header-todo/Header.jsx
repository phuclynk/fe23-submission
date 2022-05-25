import React from "react";
import {Button} from '../button/Button';
import {Input} from'../input/Input';
import './Style.css'

export function Header() {
    return <div className="bgHead">
        <Input />
        <Button />
    </div>
}