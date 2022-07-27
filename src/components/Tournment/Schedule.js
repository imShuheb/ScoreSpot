import React from 'react'
import HomeNav from '../Navbars/HomeNav'
import SideNav from '../Navbars/SideNav'
// import News from '../home/News'

const Schedule = () => {
    return (
        <>
            <HomeNav />
            <div className="side">
                <SideNav />
                <div className="main_content">
                    <div className="info" >
                        <div className="container scroll red-bar" style={{ marginTop: "45px" }}>
                            <div className="row">
                                <div className="col-sm-6 p-2">
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
                                <div className="col-sm-6 p-2">
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
                                </div><div className="col-sm-6 p-2">
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
                                </div><div className="col-sm-6 p-2">
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
                                </div><div className="col-sm-6 p-2">
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
                <div className="newsContainer">
                    {/* <div className="header">Top news</div> */}
                    {/* <News /> */}
                </div>
            </div>

        </>
    )
}

export default Schedule