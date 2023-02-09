import React from 'react'
import Page from '../../Layout/Page'
import Home_LeftSec from '../../components/Home/Home_LeftSec' 
import Home_RightSec from '../../components/Home/Home_RightSec'
import Home_MidSec from '../../components/Home/Home_MidSec'
import Qyeri from '../../Layout/Qyeri'
const HomePage = () => {
  return (
    <>
    <Page LeftSec={Home_LeftSec} RightSec={Home_RightSec} MidSec={Home_MidSec} Name={"Home"} />

    </>
  )
}

export default HomePage