import React from "react";
import "./TodoItem.css"
import { FaTrash } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

export function TodoItem(props) {
    const navigate = useNavigate();
    const gotoEditTask = () => {
        navigate(`/edit-task/${props.id}`, {
            state: {
                id: props.id, title: props.title, creator: props.creator, status: props.status,
                createdAt: props.createdAt, description: props.description
            }
        })
        // navigate(`/edit-task/${props.id}`)
    };

    return (
        <div>
            <Card className="card-todo-item" onClick={gotoEditTask}>
                <Card.Header>
                    <Card.Title className="card-title">Title: {props.title}</Card.Title>
                    <Card.Text>
                        Creator: {props.creator}
                    </Card.Text>
                    <Card.Text className={props.status === 0 ? "status-new" : props.status === 1 ? "status-doing" : "status-done"}>
                        Status: {props.status === 0 ? "New" : props.status === 1 ? "Doing" : "Done"}
                    </Card.Text>
                </Card.Header>
                <hr className="card-separator" />
                <Card.Body>
                    <Card.Title className="card-title">Description:</Card.Title>
                    <Card.Text className="item-description">
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}