import React from "react";
import "./style.css";
import { DeleteOutlined } from '@ant-design/icons';

export function ButtonSmall(props) {
    const iconStyle = {
        color: 'red'
    }
    const deleteTask = () => {
        props.deleteTask();
    }

    return <button className="button-small" onClick={deleteTask}>
        {/* <i className={props.iconClass}></i> */}
        <DeleteOutlined style={iconStyle} />
    </button>;
}