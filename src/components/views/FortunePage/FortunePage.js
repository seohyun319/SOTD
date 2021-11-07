import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import './FortunePage.css'
import HomeBtn from '../HomeBtn'
import {Button} from 'react-bootstrap'

function FortunePage() {
    let body = {
        month : 5,
        day : 15,
    }

    const [users, setUsers] = useState("");
    const [rest, setRest] = useState()

    const fetchUsers = async () => {
        const response = await axios.post('http://localhost:5000/select/fortune/', body);
        setUsers(response.data);
        console.log(response.data)
    };
    console.log(users);
    

 useEffect(() => {
    fetchUsers();
  }, []);


  const goToSee = (e) => {
    e.preventDefault();
    // let body = {
    //     month : selectedMonth,
    //     day : selectedDay,
    // }
    axios.post('http://localhost:5000/select/fortunestore')
    .then(res => {
        console.log(res.data.title);
        setRest(res.data.title);
    })
    // window.location.href = '/select/fortune';
}

    // const request = axios.post('http://localhost:5000/select/fortune', body)
    //     .then(response => {console.log(response)})
        
    // return {
        
    // }


    // const acceptReqHandler = (e) => {
    //     e.preventDefault();
    //     let body = {
    //         month : selected Month,
    //         day : selectedDay,
    //     }
    //     window.location.href = '/fortune';
    //     axios.post('http://localhost:5000/info/', body, {
    //         withCredentials: true,
    //     })
    //     .then(res => {
    //         console.log(res);
    //     })
    // }


// function FortunePage() {
    // const acceptReqHandler = (e) => {
    //     e.preventDefault();
    //     let body = {
    //         month : selected Month,
    //         day : selectedDay,
    //     }
    //     window.location.href = '/fortune';
    //     axios.post('http://localhost:5000/info/', body, {
    //         withCredentials: true,
    //     })
    //     .then(res => {
    //         console.log(res);
    //     })
    // }
    return (
        <div className="base">
            <h5>오늘 당신에게 맞는 음식은?</h5>
            <div>{users}</div>
            <HomeBtn />
            <Button onClick={goToSee} variant="outline-info">추천 학교 앞 음식점 보기</Button>
            <div>{rest}</div>
        </div>
    )
}


export default FortunePage