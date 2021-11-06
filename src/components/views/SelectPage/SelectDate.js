import React from 'react'
import { useState } from 'react';

function SelectDate() {
    const [selectedYear, setSelectedYear] = useState(2000)
    
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
    const date = () => {
        const result = [];
        for (let i = 1; i < 32; i++) {
            result.push(<option value="{i}">{i}</option>);
        }
        return result;
    };

    return (
        <div>
            <select value={selectedYear} >
                {year()}
            </select>년
            <select >
                {month()}
            </select>월
            <select >
                {date()}
            </select>일
        </div>
    )
}

export default SelectDate
