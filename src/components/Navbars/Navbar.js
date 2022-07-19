import React from 'react'
// import { useLocation } from 'react-router-dom'
import { Link as Linkroll } from 'react-scroll'



export default function Navbar() {

  // let location = useLocation();
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand px-3" href='/'>sCorespot</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse m" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Linkroll to='roll-back' className="nav-link active" aria-current="page" href='/'>Home</Linkroll>
              </li>
              <li className="nav-item">
                <Linkroll to='roll-fet' className="nav-link" href="/">Features</Linkroll>
              </li>
              <li className="nav-item">
                <Linkroll to='roll' className="nav-link " aria-current="page" href="/">About</Linkroll>
              </li>
              <li className="nav-item">
                <Linkroll to='roll-log' className="nav-link" href='/'>Login</Linkroll>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
