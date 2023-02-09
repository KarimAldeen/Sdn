import React from 'react'
import Page from '../../Layout/Page'
import Team_LeftSec from '../../components/Team/Team_LeftSec' 
import Team_RightSec from '../../components/Team/Team_RightSec'
import Team_MidSec from '../../components/Team/Team_MidSec'
import Qyeri from '../../Layout/Qyeri'
const TeamPage = () => {
  return (
        <Page LeftSec={Team_LeftSec} RightSec={Team_RightSec} MidSec={Team_MidSec}  Name={"Team"} />

  )
}

export default TeamPage