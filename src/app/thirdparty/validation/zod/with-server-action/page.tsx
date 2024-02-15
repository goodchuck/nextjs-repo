"use client"
import { LoadingButton } from '@/app/_component/LoadingButton';
import { Flex, Input } from 'antd';
import { check } from '../_component/actions';



export default function ZodWithServerAction() {

    return (
        <Flex gap='middle' vertical>
            <p>클라이언트 컴포넌트에 Zod와 serverAction 연동</p>
            <form action={check}>
                <Input name="name" placeholder="id를 입력하세요" />
                <Input name="height" placeholder="키를 입력하세요" />
                <Input name="age" placeholder="나이를 입력하세요" />
                <Input name="phoneNum" placeholder="핸드폰 번호를 입력하세요" />
                <Input name="isCompletedMilitaryService" placeholder="군필여부를적어주세요 true or false" />
                <LoadingButton htmlType={'submit'} />
            </form>
        </Flex>
    )
}