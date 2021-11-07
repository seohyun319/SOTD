import React from 'react'
import SelectTime from './SelectTime'
import {Button} from 'react-bootstrap'
import './SelectPage.css'
import SelectSex from './SelectSex'
import { useState } from 'react';
import axios from 'axios';

function SelectPage() {
    const [selectedYear, setSelectedYear] = useState(2000);
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedDay, setSelectedDay] = useState(1)
    const handleSelectYear = (e) => {
        setSelectedYear(e.target.value);
    };
    const handleSelectMonth = (e) => {
        setSelectedMonth(e.target.value);
    };
    const handleSelectDay = (e) => {
        setSelectedDay(e.target.value);
    };
    
    const year = () => {
        const result = [];
        for (let i = 2020; i > 1930; i--) {
            result.push(<option value={i}>{i}</option>);
        }
        return result;
    };
    const month = () => {
        const result = [];
        for (let i = 1; i < 13; i++) {
            result.push(<option value={i}>{i}</option>);
        }
        return result;
    };
    const day = () => {
        const result = [];
        for (let i = 1; i < 32; i++) {
            result.push(<option value={i}>{i}</option>);
        }
        return result;
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            month : selectedMonth,
            day : selectedDay,
        }
        axios.post('http://localhost:5000/select/', body)
        .then(res => {
            console.log(res);
        })
        window.location.href = '/select/fortune';
    }
    return (
        <div className="content">
            <div className="title_q q_sex">당신의 성별은? </div>            
                <SelectSex></SelectSex>
            <div className="title_q q_birth">당신의 생년월일은?</div>
                <div className="ymd">
                    <select value={selectedYear} onChange={handleSelectYear}>
                        {year()}
                    </select>년
                    <select value={selectedMonth} onChange={handleSelectMonth}>
                        {month()}
                    </select>월
                    <select value={selectedDay} onChange={handleSelectDay}>
                        {day()}
                    </select>일
                </div>
            <div className="title_q q_time">몇 시에 태어났나요?</div>
                <SelectTime></SelectTime>
            <Button onClick={onSubmitHandler} variant="outline-info">결과 보러 가기</Button>            
        </div>
    )
}

export default SelectPage
