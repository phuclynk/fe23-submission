import React from "react";
import { Checkbox } from 'antd';
import { DeleteOutlined  } from '@ant-design/icons';
import { Button } from 'antd';
import './Style.css';

export function Test(){
    return <div className="boxTest">
        <Checkbox /> 
        <span>Test React Ant Design Todo List</span>
        <Button type="primary" shape="circle" icon={<DeleteOutlined  />} />
    </div>
}