import React from 'react'
import { Link,useLocation } from 'react-router-dom'


export default function Navbar() {
  const history = useLocation();

  const HandleLogout = () =>{
    sessionStorage.clear();
    history("/")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger ">
        <div className="container-fluid">
          <a className="navbar-brand px-3" href='/'>sCorespot</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse m" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to='/home' className={`nav-link ${history.pathname==="/home"? "active": ""}`} aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/myProfile' className={`nav-link ${history.pathname==="/myProfile"? "active": ""}`}>My Profile</Link>
              </li>
              <li className="nav-item">
                <Link to='/' onClick={HandleLogout} className="nav-link">Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
