import React, { useEffect, useContext } from 'react'
import '../../css/styles_home.css'
import News from "./News"
import HomeNav from '../Navbars/HomeNav'
import profileContext from '../../context/Profile/profileContext'
import { useNavigate } from 'react-router-dom'
import SideNav from '../Navbars/SideNav'

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
          <SideNav/>
          <div className="main_content">
            <div className="info" >
              <div className="container scroll" style={{marginTop:"45px"}}>
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
