import React, { useContext } from 'react'
import userContext from '../../../context/User/userContext'

const MatchList = () => {
    const context = useContext(userContext);
    const matches = context.matches

    const write = () => {
        document.write("Refresh Page")
    }

    return (
        <>
            <div className="row">
                {Array.isArray(matches)
                    // eslint-disable-next-line 
                    ? matches.map(ele => {
                        return (
                            <>
                                <div className="col-sm-6" key={ele._id}>
                                    <div className="card bg-light mb-3 " style={{ maxWidth: "25rem" }}>
                                        <div className="card-header text-uppercase"> {ele.ground} </div>
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
                                                {context.usercheck.success === 'true' ? <a role='button' className='p-m-0'>start scoring</a> : ""}
                                                <a role='button' className='p-m-0'> view </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }) : write}
            </div>
        </>
    )
}

export default MatchList

