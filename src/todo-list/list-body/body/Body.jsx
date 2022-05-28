import React from "react";
import './Style.css';
import { Checkbox } from 'antd';
import { DeleteOutlined  } from '@ant-design/icons';
import { Button } from 'antd';

export function Body(){
    return  <div className="BodyL">
                <div className="boxTest">
                    <Checkbox /> 
                    <span>Book flights to Ireland</span>
                    <Button type="primary" shape="circle" icon={<DeleteOutlined  />} />
                </div>
                <div className="boxTest">
                    <Checkbox /> 
                    <span>Write About React And AntDesign</span>
                    <Button type="primary" shape="circle" icon={<DeleteOutlined  />} />
                </div>
                <div className="boxTest">
                    <Checkbox /> 
                    <span>Test React Ant Design Todo List</span>
                    <Button type="primary" shape="circle" icon={<DeleteOutlined  />} />
                </div>
            </div>
}