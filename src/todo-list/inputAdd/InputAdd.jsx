import React from "react";
import { Input } from 'antd';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import './Style.css'

export function InputAdd() {
    return <div className="inline-row">
        <Input placeholder="Basic usage" />
        <Button type="primary" shape="round" icon={<PlusCircleOutlined />}>
        Add
      </Button>
    </div>
}