
async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/recommends`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


export default async function DataFetchPage() {
    // const data = await getData();
    // console.log({ data })
    return (
        <div>
            <h1>전 데이터 패칭용 페이지에요</h1>
            <p>
                async await으로 이루어진 서버컴포넌트안에 fetch를 사용할 수 있어요
            </p>
            <h3>next.js에서 fetch 캐싱 방법</h3>
            <p>fetch(&quot;https://...&quot;, {'{cache: "force-cache"}'})</p>

            <h3>next.js에서 revalidating Data하는 방법</h3>
            <p>fetch(&quot;https://...&quot;, {'next: { revalidate: 3600}'})</p>

        </div>
    )
}
