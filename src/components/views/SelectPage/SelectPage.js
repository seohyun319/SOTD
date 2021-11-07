import React from 'react'
import SelectDate from './SelectDate'
import SelectTime from './SelectTime'
import {Button} from 'react-bootstrap'
import './SelectPage.css'
import SelectSex from './SelectSex'
import onSubmitHandler from './SelectDate'

function SelectPage() {
    
    return (
        <div className="content">
            <div className="title_q q_sex">당신의 성별은? </div>            
                <SelectSex></SelectSex>
            <div className="title_q q_birth">당신의 생년월일은?</div>
                <SelectDate></SelectDate>
            <div className="title_q q_time">몇 시에 태어났나요?</div>
                <SelectTime></SelectTime>
            {/* <Button onClick={onSubmitHandler} variant="outline-info">결과 보러 가기</Button> */}
        </div>
    )
}

export default SelectPage
