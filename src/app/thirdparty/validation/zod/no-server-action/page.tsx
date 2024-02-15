"use client"
import { AntRadio } from '@/app/_ant/Radio';
import { LoadingButton } from '@/app/_component/LoadingButton';
import { Flex, Input, } from 'antd';
import { useState } from 'react';

import { z } from 'zod';

const Man = z.object({
    name: z.string(),
    height: z.number(),
    age: z.number().min(18, { message: 'too young to play' }).max(40, { message: 'too old to play' }),
    phoneNum: z.string(),
    email: z.string().trim().email().optional(),
    // homePhoneNum: z.string().optional(),
    isCompletedMilitaryService: z.string(),
    // isCompletedMilitaryService: z.string().transform((val) => val === 'true' || val === 'false')
});

// 타입 선언도 할수있다.
type Man = z.infer<typeof Man>;


type zodSafeParseType = {
    success: boolean;
    error?: any;
    data?: any;
}

type RadioData = {
    key: string | number | boolean;
    value: string | number;
}


export default function ZodNoServerAction() {
    const [result, setResult] = useState<zodSafeParseType>();
    const [completedMilitaryServiceRadioData, setCompletedMilitaryServiceRadioData] = useState<RadioData[]>([{ key: true, value: 'true' }, { key: false, value: 'false' }]);
    function check(formData: FormData) {
        const name = formData.get("name");
        const height = Number(formData.get("height"));
        const age = Number(formData.get("age"));
        const phoneNum = formData.get("phoneNum");
        const eMail = formData.get('eMail');
        let isCompletedMilitaryService = formData.get("isCompletedMilitaryService");
        let r = Man.safeParse({ name, height, age, phoneNum, eMail, isCompletedMilitaryService });
        console.log(r);
        setResult(r);
    }


    return (
        <Flex gap='middle' vertical>
            <p>클라이언트 컴포넌트에 Zod 사용하기</p>
            <p>나이는 18세 이상 40세 까지만 성공으로 간주합니다.</p>
            <p>이메일은 선택입니다</p>
            <form action={check}>
                <Flex gap='middle' vertical style={{ width: '400px' }}>
                    <Input name="name" placeholder="id를 입력하세요" />
                    <Input type='number' name="height" placeholder="키를 입력하세요" />
                    <Input type='number' name="age" placeholder="나이를 입력하세요" />
                    <Input type='number' name="phoneNum" placeholder="핸드폰 번호를 입력하세요" />
                    <Input type='text' name="eMail" placeholder="이메일을 입력하세요" />
                    {/* <Input name="isCompletedMilitaryService" placeholder="군필여부를적어주세요 true or false" /> */}
                    <AntRadio name='isCompletedMilitaryService' data={completedMilitaryServiceRadioData} />
                    <LoadingButton htmlType={'submit'} times={1000} />
                </Flex>
            </form>
            <h2>결과</h2>
            {result && (
                <div>
                    <p>성공 여부 : {result.success ? '성공' : '실패'}</p>
                    {result.success ? (<p>성공 : {result && JSON.stringify(result.data)}</p>) : (<p>실패 : {result && String(result.error)}</p>)}
                </div>)}
        </Flex>
    )
}