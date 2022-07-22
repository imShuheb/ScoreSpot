import React from 'react'
import HomeNav from '../../Navbars/HomeNav'
import SideNav from '../../Navbars/SideNav'
import Players from './Players'
const CreateTeam = () => {
  return (
    <>
      <HomeNav />
      <SideNav />
      <div className="row">
        <div className="col-sm-4">
          <div className="width scroll " style={{ position: "absolate" }}>
            <Players />
          </div>
        </div>
        <div className="col-sm-6">
        </div>
      </div>
    </>
  )
}

export default CreateTeam