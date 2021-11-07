import React from 'react'
import {Button} from 'react-bootstrap'

function HomeBtn() {
    return (
        <div>
            <Button onClick={() => window.location.href = '/'}  variant="outline-light">홈으로 돌아가기</Button>            
        </div>
    )
}

export default HomeBtn
