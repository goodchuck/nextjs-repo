import PostRecommends from "../_component/PostRecommends"


type Props = {
    params: { username: string }
}

export default async function Page() {
    return (
        <>
            X(전 트위터)의 무한 스크롤을 기능 구현된 페이지
            <PostRecommends></PostRecommends>
        </>
    )
}