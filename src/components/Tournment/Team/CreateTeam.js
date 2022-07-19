import React ,{useContext}from 'react'
import HomeNav from '../../Navbars/HomeNav'
import userContext from '../../../context/User/userContext'

const CreateTeam = () => {
  const context =  useContext(userContext)
  return (
    <>
    <HomeNav/>
    
    </>
    )
}

export default CreateTeam