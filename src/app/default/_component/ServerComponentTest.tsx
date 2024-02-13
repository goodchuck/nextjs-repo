
export const ServerComponentTest = () => {
    return (
        <div>
            <h1>전 서버 컴포넌트에요</h1>

            <div>
                <p>전 서버에게 렌더링되요</p>
                <p>서버에서 초기 요청 시에 렌더링이되고, HTML로 클라이언트에게 전송해요</p>
                <h3>사용하기 좋을 때</h3>
                <p>1. 서버 fetch할때 사용하면 좋다.</p>
                <p>2. 백엔드 리소스를 직접 접근할 때 좋다.</p>
                <p>3. 민감한 정보(access tokens, API keys, etc)등 지키고싶을 때</p>
            </div>
        </div>
    )
}