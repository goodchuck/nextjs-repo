import dayjs from "dayjs";
import { Card } from "antd";

export default async function Page() {
    const now = dayjs();
    const width = 300;

    return (
        <div>
            <h2>설치</h2>
            <h3>npm i dayjs</h3>
            <h2>사용법</h2>
            <h3>import dayjs from "dayjs"</h3>
            <h3>오늘날짜는 const now = dayjs()</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <Card title="날짜 양식들" bordered={false} style={{ width: width }}>

                    <p>현 시간 기준</p>
                    <p>{now.format()} / now.format()</p>
                    <p>{now.format("YYYY.MM.DD")} / now.format("YYYY.MM.DD")</p>
                    <p>{now.format("MM/DD/YY")} / now.format("MM/DD/YY")</p>
                    <p>{now.format("YYYY-MM-DD HH:mm:ss")} / now.format("YYYY-MM-DD HH:mm:ss")</p>
                </Card>
                <Card title="년월일 구하기" bordered={false} style={{ width: width }}>

                    <p>현 시간 기준</p>
                    <p>년</p>
                    <p>{now.get('year')}년 / now.get('year')</p>
                    <p>{now.get('y')}년 / now.get('y')</p>

                    <p>월 (찾아야하는 월에서 하나빼서 준다)</p>
                    {/* 05 (월 - 0~11) */}
                    <p>{now.get('month') + 1}월 / now.get('month') + 1</p>
                    {/* 5 (월 - 0~11) */}
                    <p>{now.get('M') + 1}월 / now.get('M') + 1</p>

                    <p>일</p>
                    <p>{now.get('date')}일 / now.get('date')</p>
                    <p>{now.get('D')}일 / now.get('D')</p>
                </Card>
                <Card title="요일 구하기" bordered={false} style={{ width: width }}>

                    <p>현 시간 기준</p>
                    <p>요일(일요일 : 0 ~ 토요일 : 6)</p>
                    {/* 요일 - 일요일 : 0, 토요일 : 6 */}
                    <p>{now.get('day')} / now.get('day')</p>
                    <p>{now.get('d')} / now.get('d')</p>
                </Card>
                <Card title="시분초밀리초 구하기" bordered={false} style={{ width: width }}>

                    <p>현 시간 기준</p>
                    <p>시</p>
                    <p>{now.get('hour')}시 / now.get('hour')</p>
                    <p>{now.get('h')}시 / now.get('h')</p>

                    <p>분</p>
                    <p>{now.get('minute')}분 / now.get('minute')</p>
                    <p>{now.get('m') + 1}분 / now.get('m')</p>

                    <p>초</p>
                    <p>{now.get('second')}초 / now.get('second')</p>
                    <p>{now.get('s')}초 / now.get('s')</p>

                    <p>밀리초</p>
                    <p>{now.get('millisecond')}밀리초 / now.get('millisecond')</p>
                    <p>{now.get('ms')}밀리초 / now.get('ms')</p>
                </Card>
                <Card title="날짜 및 시간 더하기 빼기" bordered={false} style={{ width: 500 }}>

                    <p>현 시간 기준</p>
                    <p>년 더하기/빼기</p>
                    <p>{now.add(1, "year").format()} / now.add(1, "year").format()</p>
                    <p>{now.subtract(1, "year").format()} / now.subtract(1, "year").format()</p>

                    <p>월 더하기/빼기</p>
                    <p>{now.add(1, "month").format()} / now.add(1, "month").format()</p>
                    <p>{now.subtract(1, "month").format()} / now.subtract(1, "month").format()</p>

                    <p>주 더하기/빼기</p>
                    <p>{now.get('second')}초 / now.get('second')</p>
                    <p>{now.subtract(1, "second").format()} / now.subtract(1, "second").format()</p>
                </Card>
            </div>
        </div>
    )
}