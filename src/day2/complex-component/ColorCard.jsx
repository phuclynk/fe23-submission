import React from "react";
import {Card} from "./card/Card";

export function ColorCard(){
    const colorCardStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return <div style={colorCardStyle}>
        <Card/>
    </div>
}