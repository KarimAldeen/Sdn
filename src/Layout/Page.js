import React from 'react'
import Const from './Const/Const'
import Mid from './Mid'
import Top from './Top'
import Down from './Down'
import Qyeri from './Qyeri'


const Page = ({LeftSec,RightSec,MidSec,Name}) => {
    return (
        <> 
        <Qyeri Name={Name}/>
        <div className={Name}>
            <Const  />
            <div className='Page absolute'>
             <Top LeftSec={LeftSec} RightSec={RightSec} />
             <Mid MidSec={MidSec} />
             <Down/>

            </div>
        </div>
 
        </>
        )  
}

export default Page