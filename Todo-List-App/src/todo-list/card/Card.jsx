import React from "react";
import { CardHeader } from "./card-header/CardHeader";
import { CardBody } from "./card-body/CardBody";

export function Card(props) {
    const cardStyle = {
        width: "90%",
        maxHeight: "500px",
        overFlow: "auto",
        margin: "50px auto",
    }
    return <div style={cardStyle}>
        <CardHeader title="Todo List"></CardHeader>
        <CardBody></CardBody>
    </div>;
}