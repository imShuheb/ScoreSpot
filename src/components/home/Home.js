import React, { useEffect, useContext } from 'react'
import '../../css/styles_home.css'
import News from "./News"
import HomeNav from '../Navbars/HomeNav'
import profileContext from '../../context/Profile/profileContext'
import UserContext from '../../context/User/userContext'
import { useNavigate } from 'react-router-dom'
import SideNav from '../Navbars/SideNav'

function Home() {
  const history = useNavigate();
  const context = useContext(profileContext);
  const list = useContext(UserContext);
  const matches = list.matches

  const Ret = () => {
    useEffect(() => {
      history('/login')
    }, [])
  }
  useEffect(() => {
    context.Profile();
    list.Players();
    list.setSave('')
    // eslint-disable-next-line
  }, [])

  if (!sessionStorage.getItem('token')) {
    return Ret();
  } else {


    return (
      <>
        <HomeNav />
        <div className="side">
          <SideNav />
          <div className="main_content">
            <div className="info" >
              <div className="container scroll red-bar" style={{ marginTop: "45px" }}>

                <div className="row">
                  {Array.isArray(matches)
                    // eslint-disable-next-line 
                    ? matches.map((ele, index) => {
                      const Run = () => {
                        useEffect(() => {
                          context.check(ele._id)
                        }, [])
                      }
                      return (
                        <>
                          <div className="col-sm-6" key={ele._id}>
                            <div className="card bg-light mb-3 " style={{ maxWidth: "25rem" }}>
                              <div className="card-header text-uppercase align-item-center"> {ele.ground} <span class={`badge bg-${ele.status === 'Completed' ? 'success' : 'warning'}`}>{ele.status}</span></div>
                              <div className="card-body text-center">
                                <h5 className="card-title text-uppercase">{ele.team1[0].name}</h5>vs
                                <h5 className="card-title  text-uppercase mt-2">{ele.team2[0].name}</h5>
                                <hr />
                                <p className='text-capitalize'>
                                  match date : {ele.date}<br />
                                  Ball Type : {ele.balltype}
                                </p>
                                <hr />
                                <div className="d-flex align-item-end justify-content-between text-capitalize">
                                  <div>time : {ele.time} </div>
                                  {Run}
                                  {/* {ele.status === 'Ongoing' ? '' : <a onClick={() => handlemodal(ele)} role='button' className='p-m-0'>start scoring</a>}
                            <a role='button' className='p-m-0'> view </a> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                    }) : ''}
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
