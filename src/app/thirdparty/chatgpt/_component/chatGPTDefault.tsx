"use client"
import OpenAI from 'openai';
import { useEffect, useState } from "react";
// const openai = new OpenAI();

/**
 * 나중에 API 직접적으로 입력받고 할 수있게 수정
 * @returns 
 */
export const ChatGPTDefault = () => {
    const [message, setMessage] = useState<string>();
    async function main() {
        return;
        // const completion = await openai.chat.completions.create({
        //     messages: [
        //         { "role": "user", "content": "You are a helpful assistant." }],
        //     model: "gpt-3.5-turbo",
        // });
        // console.log(completion.choices[0]);
        // if (completion.choices[0].message.content) {
        //     setMessage(completion.choices[0].message.content);
        // }

    }


    return (
        <>
            <button onClick={() => { main() }}>테스트 버튼</button>
            <p>테스트</p>
            {message && (<p>{message}</p>)}
        </>
    )
}