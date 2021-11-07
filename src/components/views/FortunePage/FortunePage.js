import React from 'react'
import axios from 'axios'

function FortunePage(dataToSubmit) {
    
    let body = {
        month : 5,
        day : 15,
    }
    const request = axios.post('http://localhost:5000/select/fortune/', body)
        .then(response => {console.log(response)})
        
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
