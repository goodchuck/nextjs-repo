"use client";
import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';

export const AntRadio = ({ name, data }: { name: string, data?: { key: number | string | boolean, value: number | string }[] }) => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    }
    return (
        <Radio.Group onChange={onChange} value={value} name={name}>
            {data ? data.map(({ key, value }, _) => (<Radio key={_} value={key}>{value}</Radio>)) : (
                <>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </>
            )
            }

        </Radio.Group >
    )
}