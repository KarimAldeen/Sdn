import React, { useEffect } from 'react'
import Const from './Const/Const'
import Mid from './Mid'
import Top from './Top'
import Down from './Down'


const Page = ({LeftSec,RightSec,MidSec}) => {
    return (
        <>
            <Const  />
            <div className='Page absolute'>
             <Top LeftSec={LeftSec} RightSec={RightSec} />
             <Mid MidSec={MidSec} />
             <Down/>

            </div>
        </>
    )
}

export default Page