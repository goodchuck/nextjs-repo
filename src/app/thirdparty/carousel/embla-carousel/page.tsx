import React from 'react';
import { Flex } from "antd";
// import { EmblaCarousel } from './_component/emblaCarousel';


export default function Page() {
    return (
        <Flex gap='middle' vertical>
            <div>embla-carousel이에요</div>
            <h2>설치</h2>
            <p>npm install embla-carousel-react --save</p>
            <p>or</p>
            <p>yarn add embla-carousel-react</p>
            <p>패키지 내부에 type이 모두 정의되어 있기 때문에 위에만 설치하면 됨</p>

            <p>npm i embla-carousel</p>


            <h3>해당 라이브러리의 특징</h3>
            <p>1. 공식문서의 친절함</p>
            <p>2. 예제코드의 존재</p>
            <p>3. 커뮤니티</p>
            <p>4. 커스텀의 자유도</p>

            {/* <EmblaCarousel></EmblaCarousel> */}
            <h3>참고 사이트</h3>
            <a href="https://velog.io/@igun0423/%EC%BA%90%EB%9F%AC%EC%85%80-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%B6%94%EC%B2%9C-Embla-Carousel">참고사이트1</a>
            <a href="https://www.embla-carousel.com/">공식 사이트</a>
        </Flex>
    )
}