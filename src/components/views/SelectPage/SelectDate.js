import React from 'react'
import { useState } from 'react';

function SelectDate() {
    const [selectedYear, setSelectedYear] = useState();
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedDay, setSelectedDay] = useState(20)
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
            result.push(<option value="{i}">{i}</option>);
        }
        return result;
    };
    const month = () => {
        const result = [];
        for (let i = 1; i < 13; i++) {
            result.push(<option value="{i}">{i}</option>);
        }
        return result;
    };
    const day = () => {
        const result = [];
        for (let i = 1; i < 32; i++) {
            result.push(<option value="{i}">{i}</option>);
        }
        return result;
    };

    return (
        <div>
            <select value={selectedYear} onChange={handleSelectYear}>
                console.log(1)
                {year()}
            </select>년
            <select value={selectedMonth} onChange={handleSelectMonth}>
                {month()}
            </select>월
            <select value={selectedDay} onChange={handleSelectDay}>
                {day()}
            </select>일
        </div>
    )
}

export default SelectDate
