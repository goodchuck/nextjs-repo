"use client"
import { HydrationBoundary, QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import Post from "../_component/Post";
import { getHearts } from "../_lib/getHearts";
import { getActions } from "../_lib/getActions";
import { Post as IPost } from "@/model/Post";
export default function Page() {

    const { data } = useQuery<IPost, Object, IPost, [_1: string, _2: string]>({ queryKey: ['posts', 'actions'], queryFn: getActions })
    if (!data) return null;
    return (
        <>
            액션버튼들 페이지 클라이언트 컴포넌트<br />
            1. 좋아요에 대한 낙관적 업데이트에 대한 걸 확인가능합니다.<br />
            2. 좋아요가 눌리지 않은 하트를 클릭해보세요 클릭 즉시 하트의 색과 수가 바뀌는걸 볼수 있습니다<br />
            3. 2번이 되고 후에 서버가 판단을하여 에러와 됬을때를 확인해줍니다.
            <div style={{ width: '600px' }}>
                <Post post={data}></Post>
            </div>

        </>
    )
}

