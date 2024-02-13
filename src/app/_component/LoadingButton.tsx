"use client"
import React, { useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

export const LoadingButton = (props: any) => {
    const [loading, setLoading] = useState<boolean>();

    const enterLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 6000);
    }

    return (
        <Button type="primary" loading={loading} onClick={() => enterLoading()} {...props} >
            제출하기
        </Button>
    )
}