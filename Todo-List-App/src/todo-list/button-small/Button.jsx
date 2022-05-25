import React from "react";
import "./style.css";
import { DeleteOutlined } from '@ant-design/icons';

export function ButtonSmall(props) {
    const iconStyle = {
        color: 'red'
    }
    return <button className="button-small">
        {/* <i className={props.iconClass}></i> */}
        <DeleteOutlined style={iconStyle} />
    </button>;
}