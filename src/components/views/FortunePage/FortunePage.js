import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import {Cookies} from "react-cookie";


function FortunePage() {
    let body = {
        month : 5,
        day : 15,
    }

    const [users, setUsers] = useState("");

    const fetchUsers = async () => {    //운세
        const response = await axios.post('http://localhost:5000/select/fortune/', body);
        setUsers(response.data.luck);
        
    };

 useEffect(() => {
    fetchUsers();
  }, []);

  const [user, setUser] = useState("");

  
    const fetchUser = async () => { //category
        const respons = await axios.post('http://localhost:5000/select/fortunefood/', body);
        setUser(respons.data.category);
        
    };
    

 useEffect(() => {
    fetchUser();
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
        <div>
            결과 페이지입니당
        </div>
    )
}


export default FortunePage
