import React, { useEffect, useState } from 'react'
import Mood from '../../Layout/Mood'

const BtnDarkMood = ({Name,setDark}) => {
  const [isdark, setisdark] = useState(false)
  function handelDark() {
    setisdark(!isdark)
    if (isdark) {
      document.body.classList.remove('dark')
      localStorage.setItem("theme", "light");
      setDark(false)

    }
    else {
      document.body.classList.add('dark')
      localStorage.setItem("theme", "dark");
        setDark(true)
    }
  }
useEffect(() => {
  const theme = localStorage.getItem("theme")
  if (theme === "dark") {
    document.body.classList.add('dark')
    setisdark(true)

  }
}, [])

  return (
    <>
    <div className='BtnDarkMood'>
    <label className="switch"  onChange={() => handelDark()}>
    <input type="checkbox" />
    <span className="slider" />
  </label>
  </div>
  <Mood isdark={isdark}   Name={Name}/>
    </>
    
  )
}

export default BtnDarkMood