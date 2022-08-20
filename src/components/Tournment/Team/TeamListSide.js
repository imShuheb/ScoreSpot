import React, { useContext } from 'react'
import userContext from '../../../context/User/userContext'
import vs from '../../../images/vs.jpg'


const TeamListSide = () => {
    const context = useContext(userContext);
    const teams = context.save;

    const write = () => {
        document.write("Refresh Page")
    }

    const handle = (e) => {
        e.preventDefault();
        context.setSave({ ...teams, [e.target.name]: e.target.value });
    }

    const onChange = (e) => {
        context.setSave({ ...teams, [e.target.name]: e.target.value });
    };

    const onsub = () => {
        if (!teams) {
            alert("fill values to schedule")
        }
        context.addSchedule(teams)
    }

    return (
        <>
            <div className="main_content my-3 ">

                <div className="info" >
                    <div className="container scroll red-bar bord" >
                        <div className="relative">
                            <img src={vs} className='img-fluid' alt="Norway" style={{ width: "95%", height: "95%" }} />

                            <div className="text-block">
                                <div className="row" style={{ marginTop: "30px" }}>

                                    {Array.isArray(teams)
                                        // eslint-disable-next-line 
                                        ? teams.map(ele => {
                                            const { name } = ele
                                            return (
                                                <div className='col-md-6 text-uppercase' key={ele._id}>
                                                    <h3>{name}</h3>
                                                </div>
                                            )
                                        }) : write}

                                </div>
                            </div>

                        </div>
                        {/* form */}
                        <h5>Match timing</h5>
                        <div className="row timepicker">
                            <div className="btn-group mx-5 bordar" role="group" aria-label="Basic example">
                                <button type="button" name='time' onClick={handle} className={`btn ${teams.time === "9:00 am" ? "btn-dark" : "btn-danger"}`} value='9:00 am'>09:00 am</button>
                                <button type="button" name='time' onClick={handle} className={`btn ${teams.time === "9:30 am" ? "btn-dark" : "btn-danger"}`} value='9:30 am'>09:30 am</button>
                                <button type="button" name='time' onClick={handle} className={`btn ${teams.time === "10:30 am" ? "btn-dark" : "btn-danger"}`} value='10:30 am'>10:30 am</button>
                                <button type="button" name='time' onClick={handle} className={`btn ${teams.time === "11:00 am" ? "btn-dark" : "btn-danger"}`} value='11:00 am'>11:00 am</button>
                                <button type="button" name='time' onClick={handle} className={`btn ${teams.time === "11:30 am" ? "btn-dark" : "btn-danger"}`} value='11:30 am'>11:30 am</button>
                                <button type="button" name='time' onClick={handle} className={`btn ${teams.time === "12:00 am" ? "btn-dark" : "btn-danger"}`} value='12:00 am'>12:00 pm</button>
                                <button type="button" name='time' onClick={handle} className={`btn ${teams.time === "12:30 am" ? "btn-dark" : "btn-danger"}`} value='12:30 am'>12:30 pm</button>
                                <button type="button" name='time' onClick={handle} className={`btn ${teams.time === "1:00 am" ? "btn-dark" : "btn-danger"}`} value='01:00 am'>01:00 pm</button>
                                <button type="button" name='time' onClick={handle} className={`btn ${teams.time === "1:30 am" ? "btn-dark" : "btn-danger"}`} value='01:30 am'>01:30 pm</button>
                            </div>
                        </div>
                        {/* form end */}
                        <br />

                        <div className="row datepicker my-2" >
                            <h5>Date</h5>
                            <input type="date" id="start" onChange={onChange} name="date" min="2022-01-01" max="2023-12-31" />
                        </div>

                        <div className='row '>
                            <div className="col-sm-6 mt-2">
                                <h5>No. of Overs</h5>
                                <input type="text" name="overs" onChange={onChange} className='form-control mx-5' placeholder='Overs' style={{ width: "400px" }} />
                            </div>
                            <div className="col-sm-6 mt-2">
                                <h5>Overs Per Bowler</h5>
                                <input type="text" name="perbowler" onChange={onChange} className='form-control mx-5' placeholder='Overs' style={{ width: "400px" }} />
                            </div>
                        </div>

                        <div className='my-4'>
                            <h5>Ground</h5>
                            <input type="text" name="ground" onChange={onChange} className='form-control mx-5' placeholder='Place' style={{ width: "400px" }} />
                        </div>
                        <div className='my-4 text-capitalize'>
                            <h5>Bowl Type</h5>
                            <div class="form-check form-check-inline mx-5">
                                <input class="form-check-input" type="radio" onChange={onChange} name="balltype" id="inlineRadio1" value="leather" />
                                <label class="form-check-label" for="inlineRadio1">leather</label>
                            </div>
                            <div class="form-check form-check-inline mx-5">
                                <input class="form-check-input" type="radio" onChange={onChange} name="balltype" id="inlineRadio2" value="tennis" />
                                <label class="form-check-label" for="inlineRadio2">tennis</label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-danger" onClick={onsub}>Schedule</button>
                </div>
            </div>
        </>
    )
}

export default TeamListSide
