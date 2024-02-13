import React from 'react';
import { revalidatePath } from "next/cache";
import SubmitButton from "./_component/SubmitButton";
import { Input, Flex } from 'antd';
import { LoadingButton } from "@/app/_component/LoadingButton";

// const baseStyle: React.CSSProperties = {
//     width: '25%',
//     height: 54,
// };

async function getUser() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/serverActions`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

async function setUser(body: { id?: any, nickname?: any }) {
    // console.log('setUser', body);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/serverActions`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    );
    revalidatePath('/')
    // if (!res.ok) {
    //     throw new Error('Failed to fetch data');
    // }

    // return res.json();
}

async function createInvoice(formData: FormData) {
    'use server'
    let rawFormData: { id?: any, nickname?: any } = {}
    // let rawFormData = {
    const id = formData.get('id')
    const nickname = formData.get('nickname')
    // }

    if (id !== '') {
        rawFormData.id = id;
    }

    if (nickname !== '') {
        rawFormData.nickname = nickname;
    }

    // console.log({ rawFormData });
    await setUser(rawFormData)
    // mutate data
    // revalidate cache

    // return <form action={createInvoice}></form>
}
export default async function Page() {

    const data = await getUser();
    return (
        <Flex gap="middle" vertical={true} style={{ height: '100dvh' }}>
            {/* <Flex vertical={true}> */}
            <h1>서버 액션</h1>
            {/* </Flex> */}
            <p>서버 액션은 폼의 뮤테이션(생성, 업데이트, 삭제)를 할 수 있게 해주는 넥스트의 아주 강력한 기능이다.</p>
            <p>서버 액션을 사용하면, API 엔드포인트를 생성하지 않고도 컴포넌트 내에서 비동기 함수를 직접 정의할 수 있다.</p>
            <Flex gap="middle" vertical={true}>
                <p>아이디 : {data.id}</p>
                <p>닉네임 : {data.nickname}</p>
                <div><p>프로필 : <img src={data.image} alt={''} width={32} height={32} /></p></div>
            </Flex>
            <form action={createInvoice} style={{ width: '300px' }}>
                <Flex gap={'middle'} vertical >
                    <Input type="text" name="id" placeholder="바꿀 id를 입력하세요" />
                    <Input type="text" name="nickname" placeholder="바꿀 nickname을 입력하세요" />
                    <LoadingButton htmlType={'submit'}></LoadingButton>
                </Flex>
            </form>
        </Flex>
    )
}