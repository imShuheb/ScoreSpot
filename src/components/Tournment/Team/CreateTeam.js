import React, { useContext } from 'react'
import HomeNav from '../../Navbars/HomeNav'
import userContext from '../../../context/User/userContext'
import SideNav from '../../Navbars/SideNav'

const CreateTeam = () => {
  const context = useContext(userContext)
  return (
    <>
      <HomeNav />
      <SideNav />
      
    </>
  )
}

export default CreateTeam