import React from "react";
import { Card } from "./card/Card";
import { Card2 } from "./card2/Card2";


export function MainCard() {
    const mainCardStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center'
    }
    return <div style={mainCardStyle}>
        <Card />
    </div>
}