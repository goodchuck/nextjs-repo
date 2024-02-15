"use client"
import React, { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

export const LoadingButton = (props: any) => {
    const [loading, setLoading] = useState<boolean>();
    let times
    if (props.times) {
        times = props.times;
    }
    else {
        times = 2000;
    }
    const enterLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, times);
    }

    return (
        <Button type="primary" loading={loading} onClick={() => enterLoading()} {...props} >
            제출하기
        </Button>
    )
}