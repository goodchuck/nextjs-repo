"use client"
import { AntRadio } from '@/app/_ant/Radio';
import { LoadingButton } from '@/app/_component/LoadingButton';
import { Flex, Input, } from 'antd';
import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

const Man = z.object({
    name: z.string().trim().min(1),
    height: z.number().min(1).max(200),
    age: z.number().min(18, { message: 'too young to play' }).max(40, { message: 'too old to play' }),
    phoneNum: z.string().trim().min(1),
    email: z.string().trim().email().optional(),
    // homePhoneNum: z.string().optional(),
    isCompletedMilitaryService: z.string().optional(),
    // isCompletedMilitaryService: z.string().transform((val) => val === 'true' || val === 'false')
});

// 타입 선언도 할수있다.
type Man = z.infer<typeof Man>;


type zodSafeParseType = {
    success: boolean;
    error?: any[];
    data?: any[];
}

type RadioData = {
    key: string | number | boolean;
    value: string | number;
}



export default function ZodNoServerAction() {
    const [result, setResult] = useState<any>();
    const [errorMessage, setErrorMessage] = useState<any>({});
    const [completedMilitaryServiceRadioData, setCompletedMilitaryServiceRadioData] = useState<RadioData[]>([{ key: true, value: 'true' }, { key: false, value: 'false' }]);
    const [formData, setFormData] = useState<Man>({
        name: '',
        height: 0,
        age: 0,
        phoneNum: '',
        email: undefined,
        isCompletedMilitaryService: undefined
    })
    const [disabled, setDisabled] = useState<boolean>(true);
    function check(formData: FormData) {
        const name = formData.get("name");
        const height = Number(formData.get("height"));
        const age = Number(formData.get("age"));
        const phoneNum = formData.get("phoneNum");
        const email = formData.get('email');
        let isCompletedMilitaryService = formData.get("isCompletedMilitaryService");

        let formObject = { name, height, age, phoneNum }
        if (email) {
            formObject = Object.assign({}, formObject, { email });
        }
        if (isCompletedMilitaryService) {
            formObject = Object.assign({}, formObject, { isCompletedMilitaryService: 'true' });
        }
        let r = Man.safeParse(formObject);

        console.log({ name, height, age, phoneNum, email, isCompletedMilitaryService })
        setResult(r);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    useEffect(() => {
        if (result && result.error) {

            let messageObject: any = {};
            result.error.issues.forEach((val: any) => {
                messageObject[val.path[0]] = val;
            })
            console.log(result.error.issues, messageObject);
            setErrorMessage((prev: any) => {
                return { ...prev, ...messageObject }
            });
        } else {
            setErrorMessage({});
        }
    }, [result])

    // useEffect(() => {
    //     console.log(errorMessage)
    // }, [errorMessage])

    useEffect(() => {
        // console.log({ formData })
        const isDisabled = Object.entries(formData).some(([key, value]) => {
            console.log({ key, value });
            if (key === 'email' || key === 'isCompletedMilitaryService') {
                // console.log("옵션누구임?", key)
                return false;
            }
            return value === '' || value === 0;
        });
        setDisabled(isDisabled);
    }, [formData]);


    return (
        <Flex gap='middle' vertical>
            <p>클라이언트 컴포넌트에 Zod 사용하기</p>
            <p>나이는 18세 이상 40세 까지만 성공으로 간주합니다.</p>
            <p>이메일은 선택입니다</p>
            <form action={check}>
                <Flex gap='middle' vertical style={{ width: '400px' }}>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="name을 입력하세요" status={errorMessage && errorMessage['name'] ? 'error' : ''} />
                    {errorMessage && errorMessage['name'] && (<div>{errorMessage['name'].message}</div>)}
                    <Input type='number' value={formData.height} onChange={handleChange} name="height" placeholder="키를 입력하세요" status={errorMessage && errorMessage['height'] ? 'error' : ''} />
                    {errorMessage && errorMessage['height'] && (<div>{errorMessage['height'].message}</div>)}
                    <Input type='number' value={formData.age} onChange={handleChange} name="age" placeholder="나이를 입력하세요" status={errorMessage && errorMessage['age'] ? 'error' : ''} />
                    {errorMessage && errorMessage['age'] && (<div>{errorMessage['age'].message}</div>)}
                    <Input type='number' value={formData.phoneNum} onChange={handleChange} name="phoneNum" placeholder="핸드폰 번호를 입력하세요" status={errorMessage && errorMessage['phoneNum'] ? 'error' : ''} />
                    {errorMessage && errorMessage['phoneNum'] && (<div>{errorMessage['phoneNum'].message}</div>)}
                    <Input type='text' value={formData.email} onChange={handleChange} name="email" placeholder="이메일을 입력하세요" status={errorMessage && errorMessage['email'] ? 'error' : ''} />
                    {errorMessage && errorMessage['email'] && (<div>{errorMessage['email'].message}</div>)}
                    {/* <Input name="isCompletedMilitaryService" placeholder="군필여부를적어주세요 true or false" /> */}
                    <AntRadio name='isCompletedMilitaryService' data={completedMilitaryServiceRadioData} />
                    {errorMessage && errorMessage['isCompletedMilitaryService'] && (<div>{errorMessage['isCompletedMilitaryService'].message}</div>)}
                    <LoadingButton htmlType={'submit'} onCompleted={result ? true : false} disabled={disabled} />
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