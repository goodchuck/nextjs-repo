import { ClientComponentTest } from "../_component/ClientComponentTest";
import { ServerComponentTest } from "../_component/ServerComponentTest";

export default function Page() {
    return (
        <>
            <h1>컴포넌트 테스트 페이지</h1>
            <h2>알아두면 좋은 것들</h2>
            <p>1. 가능하다면 클라이언트 컴포넌트의 게층은 낮게!</p>
            <p>2. 클라이언트 컴포넌트에서 서버 컴포넌트를 임포트 하는 것은 지원 X</p>
            <p>3. 서버 컴포넌트에서 클라이언트 컴포넌트에게 다른 서버 컴포넌트를 자식으로 넘겨주는 건 가능하다</p>
            <p>4. server-only, client-only 패키지를 지원한다.</p>
            <div style={{ display: 'flex' }}>
                <ServerComponentTest></ServerComponentTest>
                <ClientComponentTest></ClientComponentTest>
            </div>
        </>
    )
}