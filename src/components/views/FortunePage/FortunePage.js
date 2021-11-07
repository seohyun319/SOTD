import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import './FortunePage.css'
import HomeBtn from '../HomeBtn'

function FortunePage() {
    let body = {
        month : 5,
        day : 15,
    }

    const [users, setUsers] = useState("");

    const fetchUsers = async () => {
        const response = await axios.post('http://localhost:5000/select/fortune/', body);
        setUsers(response.data);
        console.log(response.data)
    };
    console.log(users);
    

 useEffect(() => {
    fetchUsers();
  }, []);


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
        </div>
    )
}


export default FortunePage
