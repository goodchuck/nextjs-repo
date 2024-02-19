"use client"
import React, { useEffect, useState } from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

type Props = {
    times?: number;
    onCompleted?: boolean;
    [key: string]: any;
}

export const LoadingButton = ({ times, onCompleted, ...rests }: Props) => {
    const [loading, setLoading] = useState<boolean>();
    const enterLoading = () => {
        if (onCompleted !== undefined) {
            setLoading(true);
        }
        else if (times) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, times);
        }
        else {
            setLoading(true);
        }

    }

    useEffect(() => {
        if (onCompleted !== undefined && onCompleted) {
            setLoading(false);
        }
    }, [onCompleted])

    return (
        <Button type="primary" loading={loading} onClick={() => enterLoading()} {...rests} >
            제출하기
        </Button>
    )
}