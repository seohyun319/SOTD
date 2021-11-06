import React from 'react'

function SelectTime() {
    return (
        <div>
            <select>
                <option value="none">모름</option>
                <option value="0_1">00:00~01:00 자시</option>
                <option value="1_3">01:00~03:00 축시</option>
                <option value="3_5">03:00~05:00 인시</option>
                <option value="5_7">05:00~07:00 묘시</option>
                <option value="7_9">07:00~09:00 진시</option>
                <option value="9_11">09:00~11:00 사시</option>
                <option value="11_13">11:00~13:00 오시</option>
                <option value="13_15">13:00~15:00 미시</option>
                <option value="15_17">15:00~17:00 신시</option>
                <option value="17_19">17:00~19:00 유시</option>
                <option value="19_21">19:00~21:00 술시</option>
                <option value="21_23">21:00~23:00 해시</option>
                <option value="23_0">23:00~00:00 자시</option>
            </select> 
        </div>
    )
}

export default SelectTime
