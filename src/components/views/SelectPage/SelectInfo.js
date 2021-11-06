import React from 'react'
import { useState } from 'react'
import SelectDate from './SelectDate'

function SelectInfo() {
    const [sex, setSex] = useState("woman")
    return (
        <div>
            <div>당신의 성별은? </div>
            <div onClick={() => {setSex("woman")}}>
                <input type="radio" value={sex} checked={sex == "woman"} />여
            </div>
            <div onClick={() => {setSex("man")}}>
                <input type="radio" value={sex} checked={sex == "man"} />남
            </div>
            <div>당신의 생년월일은?</div>
                <SelectDate></SelectDate>
            
            <div>몇 시에 태어났나요?</div>
        </div>
    )
}

export default SelectInfo
