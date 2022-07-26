import React, { useContext } from 'react'
import HomeNav from '../../Navbars/HomeNav'
import SideNav from '../../Navbars/SideNav'
import Players from './Players'
import SideForm from './SideForm'
import userContext from '../../../context/User/userContext'

const CreateTeam = () => {
  const context = useContext(userContext)

  const handleCreate = (e) => {
    e.preventDefault();
    const teamname = document.getElementById('teamname').value
    const dat = context.playersdata
    console.log(dat.length)
    if (dat.length < 11) {
      return alert('Team should have 11 players')

    } else if (teamname === '') {
      return alert("ENTER TEAM NAME")

    } else {
      context.addTeam(context.playersdata, teamname)
    }
  }
  const handleclear = (e) => {
    e.preventDefault();
    context.setPlayers('')
  }

  return (
    <div className='overflow'>
      <HomeNav />
      <SideNav />
      <div className="row ">
        <div className="col-sm-4">
          <div className="width scroll red-bar " style={{ position: "absolate" }}>
            <Players />
          </div>
        </div>
        <div className="col-sm-8">
          <div className="container sideform-size red-bar">
            <button className='btn btn-danger b-s mb-3' onClick={handleclear}>
              <strong>Clear All</strong> <i class="fa-solid fa-trash mx-2"></i>
            </button>
            <div className="row ">
              <SideForm />
            </div>
            <div className="row fixed-row-bottom">
              <input type="email" className="form-control" id="teamname" />
              <center>
                <small id="teamname" className="form-text text-muted text-capitalize">enter your team name, it must be unique</small>
              </center>
              <button className='btn btn-danger b-s my-2' onClick={handleCreate}>
                <strong>Create Team</strong> <i class="fa-solid fa-user-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CreateTeam