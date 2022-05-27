import React from "react";
import { Checkbox } from 'antd';
import { DeleteOutlined  } from '@ant-design/icons';
import { Button } from 'antd';
import './Style.css';

export function Write(){
    return <div className="boxTest">
        <Checkbox /> 
        <span>Write About React And AntDesign</span>
        <Button type="primary" shape="circle" icon={<DeleteOutlined  />} />
    </div>
}