import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function SelectDate() {
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



    
    
    
    // useEffect(() => {
        //     axios.post("https://localhost:3000/info/fortune")
        //         .then((req) => {
            //             setSelectedMonth(res.data)
            //             setSelectedDay(res.data)
            //         })
            //         .then(res => console.log(res.data))
            //     }, [])
            
            
            // useEffect(() => {
                //     fetch("/info/fortune")
                //         .then((res) => {
                    //             setSelectedMonth(res.data)
                    //             setSelectedDay(res.data)
                    //         })
                    //     }, [])
                    
                    // const navigate  = useNavigate();
                    
                    
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
                        
        // dispatch(body).then((res) => {
        //     setSelectedMonth(res.data)
        //     setSelectedDay(res.data)
        // })




    return (
        <div>
            <select value={selectedYear} onChange={handleSelectYear}>
                {year()}
            </select>년
            <select value={selectedMonth} onChange={handleSelectMonth}>
                {month()}
            </select>월
            <select value={selectedDay} onChange={handleSelectDay}>
                {day()}
            </select>일
            <Button onClick={onSubmitHandler} variant="outline-info">결과 보러 가기</Button>

        </div>
    )
}

export default SelectDate
