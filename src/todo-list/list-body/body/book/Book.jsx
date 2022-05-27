import React from "react";
import { Checkbox } from 'antd';
import { DeleteOutlined  } from '@ant-design/icons';
import { Button } from 'antd';
import './Style.css';

export function Book(){
    return <div className="boxTest">
        <Checkbox /> 
        <span>Book flights to Ireland</span>
        <Button type="primary" shape="circle" icon={<DeleteOutlined  />} />
    </div>
}