import React from 'react'
import Page from '../../Layout/Page'
import Contact_LeftSec from '../../components/Contact/Contact_LeftSec' 
import Contact_RightSec from '../../components/Contact/Contact_RightSec'
import Contact_MidSec from '../../components/Contact/Contact_MidSec'
const ContactPage = () => {
  return (
        <Page LeftSec={Contact_LeftSec} RightSec={Contact_RightSec} MidSec={Contact_MidSec}  Name={"Contact"} />

  )
}

export default ContactPage