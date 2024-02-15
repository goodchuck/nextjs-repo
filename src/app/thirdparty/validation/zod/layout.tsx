import React from "react";

export default async function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>zod연습 페이지</h1>
            <h2>설치 방법</h2>
            <p>npm install zod</p>
            <h2>zod의 특징</h2>
            <p>서버사이드렌더링에서 사용가능하다</p>
            <p>타입스크립트보다 더한 유효성 검증이 가능하다</p>
            {children}
        </>
    )
}