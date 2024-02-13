"use client"

import { useState } from "react"


export const ClientComponentTest = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>전 클라이언트 컴포넌트에요</h1>

            <div>
                <p>클라이언트 측 렌더링을 위한 컴포넌트에요</p>
                <p>서버에서 렌더링되지 않고 브라우저에서 자바스크립트가 활성화된 후 클라이언트 측체서만 렌더링되요</p>
                <h3>사용하기 좋을 때</h3>
                <p>1. onClick()이나 onChange()이벤트 를 사용할 때,(onClick(), onChange(), etc)</p>
                <p>2. useState나 Lifecycle Effects를 사용할 때(useState(), useReducer(), useEffect(), etc)</p>
                <p>3. browser-only APIs 를 사용할 때</p>
                <p>4. state, effects, or browser-only APIs에 의존하는 커스텀훅을 사용할 때</p>
                <p>useState사용이가능해요</p>
                <p>현재 카운트 {count}</p>
                <button onClick={() => setCount(count + 1)}>Click me +</button>
                <button onClick={() => setCount(count - 1)}>Click me -</button>
            </div>
        </div>
    )
}