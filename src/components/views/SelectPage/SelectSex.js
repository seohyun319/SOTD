import React from 'react'
import { useState } from 'react'


function SelectSex() {
    const [sex, setSex] = useState("woman")

    return (
        <div>
            <div className="sex">                
                <div class="woman" onClick={() => {setSex("woman")}}>
                    <input type="radio" value={sex} checked={sex === "woman"} />여
                </div>
                <div className="man" onClick={() => {setSex("man")}}>
                    <input type="radio" value={sex} checked={sex === "man"} />남
                </div>
            </div>            
        </div>
    )
}

export default SelectSex