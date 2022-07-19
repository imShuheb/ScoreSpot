import React, { useEffect, useContext } from 'react'
import '../../css/styles_home.css'
import News from "./News"
import HomeNav from '../Navbars/HomeNav'
import profileContext from '../../context/Profile/profileContext'
import { useNavigate, Link } from 'react-router-dom'

function Home() {
  const history = useNavigate();
  const context = useContext(profileContext);

  const Ret = () => {
    useEffect(() => {
      history('/login')
    }, [])
  }

  if (!sessionStorage.getItem('token')) {
    return Ret();
  } else {
    context.Profile();
    return (
      <>
        <HomeNav />
        <div className="side">
          <div className="sidebar justify-content-center">
            <h2>Welcome</h2>
            <ul style={{ paddingLeft: "0%" }}>
              <li><a href="/home"><i className="fas fa-home"></i>Teams</a></li>
              <li><a href="/scores"><i className="fas fa-user"></i>Scores</a></li>
              <li><a href="/grounds"><i className="fas fa-map-pin"></i>Grounds</a></li>
              <li ><a href="/toranments" ><i className="fas fa-address-book"></i>Toranments</a></li>
            </ul>
          </div>

          <div className="main_content">
            <div className="info">
              <div className="d-sm-flex flex-row-reverse">
                <Link to="/teams" className="btn btn-outline-danger">Create Team +</Link>
              </div>
              <hr />
              <div className="container scroll">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card bg-light mb-3" style={{ maxWidth: "26rem" }}>
                      <div className="card-header">Match Type</div>
                      <div className="card-body">
                        <p className="card-text">Address: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, facere!</p>
                        <h5 className="card-title">team 1 </h5>
                        <h5 className="card-title">team 2 </h5>
                        <hr />
                        <div className='text-center p-0'>schedule timing</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card bg-light mb-3" style={{ maxWidth: "26rem" }}>
                      <div className="card-header">Match Type</div>
                      <div className="card-body">
                        <p className="card-text">Address: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, facere!</p>
                        <h5 className="card-title">team 1 </h5>
                        <h5 className="card-title">team 2 </h5>
                        <hr />
                        <div className='text-center p-0'>schedule timing</div>
                      </div>
                    </div>
                  </div><div className="col-sm-6">
                    <div className="card bg-light mb-3" style={{ maxWidth: "26rem" }}>
                      <div className="card-header">Match Type</div>
                      <div className="card-body">
                        <p className="card-text">Address: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, facere!</p>
                        <h5 className="card-title">team 1 </h5>
                        <h5 className="card-title">team 2 </h5>
                        <hr />
                        <div className='text-center p-0'>schedule timing</div>
                      </div>
                    </div>
                  </div><div className="col-sm-6">
                    <div className="card bg-light mb-3" style={{ maxWidth: "26rem" }}>
                      <div className="card-header">Match Type</div>
                      <div className="card-body">
                        <p className="card-text">Address: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, facere!</p>
                        <h5 className="card-title">team 1 </h5>
                        <h5 className="card-title">team 2 </h5>
                        <hr />
                        <div className='text-center p-0'>schedule timing</div>
                      </div>
                    </div>
                  </div><div className="col-sm-6">
                    <div className="card bg-light mb-3" style={{ maxWidth: "26rem" }}>
                      <div className="card-header">Match Type</div>
                      <div className="card-body">
                        <p className="card-text">Address: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, facere!</p>
                        <h5 className="card-title">team 1 </h5>
                        <h5 className="card-title">team 2 </h5>
                        <hr />
                        <div className='text-center p-0'>schedule timing</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
          {/*news cotainer  */}
          <div className="newsContainer">
            <div className="header">Top news</div>
            <News />
          </div>
        </div>

      </>
    )
  }

}

export default Home
