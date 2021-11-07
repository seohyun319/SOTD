import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import HomeBtn from '../HomeBtn'
import './FortunePage.css'

function ColorPage() {
    const [color, setColor] = useState()
    // const goToSee = (e) => {
    //     e.preventDefault();
    //     let body = {
    //         month : 3,
    //         day : 6,
    //     }
    //     axios.post('http://localhost:5000/select/color', body)
    //     .then(res => {
    //         console.log(res);
    //         setColor(res.data.title);
    //     })
    //     // window.location.href = '/select/fortune';
    // }


    let body = {
                month : 3,
                day : 6,
            }
    const fetchUsers = async () => {
        const response = await axios.post('http://localhost:5000/select/color/', body);
        setColor(response.data.colors);
        console.log(response.data)
    };
    // console.log(color.colors);
    // console.log(color.kind);
    // console.log(color.code);

    useEffect(() => {
        fetchUsers();
      }, []);
    
    


    return (
        <div className="base">
            <h5>오늘 당신에게 맞는 컬러는?</h5>
            <div>{color}</div>
            <HomeBtn />
        </div>
    )
}

export default ColorPage
