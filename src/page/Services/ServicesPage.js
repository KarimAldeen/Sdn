import React from 'react'
import Page from '../../Layout/Page'
import Services_LeftSec from '../../components/Services/Services_LeftSec' 
import Services_RightSec from '../../components/Services/Services_RightSec'
import Services_MidSec from '../../components/Services/Services_MidSec'
const ServicesPage = () => {
  return (
        <Page LeftSec={Services_LeftSec} RightSec={Services_RightSec} MidSec={Services_MidSec}  Name={"Services"} />

  )
}

export default ServicesPage