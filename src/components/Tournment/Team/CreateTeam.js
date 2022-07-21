import React from 'react'
import HomeNav from '../../Navbars/HomeNav'
import SideNav from '../../Navbars/SideNav'
import Players from './Players'
const CreateTeam = () => {
  return (
    <>
      <HomeNav />
      <SideNav />
      <div className="width scroll my-5">
        <Players />
      </div>
    </>
  )
}

export default CreateTeam