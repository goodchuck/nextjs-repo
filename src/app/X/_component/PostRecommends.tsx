"use client"

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getPostRecommends";
import { Post as IPost } from '@/model/Post';
import { Fragment, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Post from "./Post";



export default function PostRecommends() {
    const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({
        queryKey: ['posts', 'recommends'],
        queryFn: getPostRecommends,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            console.log({ lastPage })
            return lastPage.at(-1)?.postId
        },
        // staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        staleTime: 0, // fresh -> stale, 5분이라는 기준
        // gcTime: 300 * 1000
        gcTime: 0
    })
    const { ref, inView } = useInView({
        threshold: 0,
        delay: 0
    })
    useEffect(() => {
        console.log('useEffect확인', { hasNextPage, inView })
        if (inView) {
            !isFetching && hasNextPage && fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

    return (
        <div style={{ width: '600px' }}>
            {data?.pages.map((page, i) => (
                <Fragment key={i}>
                    {page.map((post) => <Post key={post.postId} post={post} />)}
                </Fragment>
            ))}
            < div ref={ref} style={{ height: 50 }} />
        </div>
    )
}