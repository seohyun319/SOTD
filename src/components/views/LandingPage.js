import React from 'react'
import './LandingPage.css'
import { Button } from 'react-bootstrap'
function LandingPage() {
    return (
        <div className="land">
            생년월일을 입력하면 오늘의 사주에 따른 결과를 추천해줘요!
            <Button onClick={() => window.location.href = '/select'}  variant="outline-info">오늘의 음식 보러 가기</Button>
            <Button onClick={() => window.location.href = '/select-color'}  variant="outline-info">오늘의 색상 보러 가기</Button>
        </div>
    )
}

export default LandingPage
