import React from 'react'
import { useState } from 'react'
import SelectDate from './SelectDate'
import SelectTime from './SelectTime'
import {Button} from 'react-bootstrap'
import './SelectPage.css'

function SelectInfo() {
    const [sex, setSex] = useState("woman")
    return (
        <div class="content">
            <div class="title_q q_sex">당신의 성별은? </div>
            <div className="sex">                
                <div class="woman" onClick={() => {setSex("woman")}}>
                    <input type="radio" value={sex} checked={sex == "woman"} />여
                </div>
                <div class="man" onClick={() => {setSex("man")}}>
                    <input type="radio" value={sex} checked={sex == "man"} />남
                </div>
            </div>
            <div class="title_q q_birth">당신의 생년월일은?</div>
                <SelectDate></SelectDate>
            <div class="title_q q_time">몇 시에 태어났나요?</div>
                <SelectTime></SelectTime>
            <Button variant="outline-info">결과 보러 가기</Button>
        </div>
    )
}

export default SelectInfo
