import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from '../../../context/User/userContext'

const MatchList = () => {
    const history = useNavigate();
    const context = useContext(userContext);
    const matches = context.matches
    const [data, setdata] = useState('')

    const onChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }
    const write = () => {
        document.write("Refresh Page")
    }

    const handlemodal = (ele) => {
        document.getElementById('modal-score').click();
        console.log(ele.team1[0].name)
        setdata(ele)
    }

    const handlesend = async () => {
        console.log(data.team1[0])
        const { date, time, ground, balltype, overs, perbowler, toss, select_b } = data
        const response = await fetch(`http://localhost:5000/teams/matches/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": sessionStorage.getItem('token')
            },
            body: JSON.stringify({ date, time, ground, team1: data.team1[0], team2: data.team2[0], balltype, overs, perbowler, toss, select_b })
        });
        const res = await response.json();
        console.log(res)
        const err = res.error
        if (err) { alert(err) }

        if (res.success === 'true') {
            const response = await fetch(`http://localhost:5000/teams/updateschedule/${data._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": sessionStorage.getItem('token')
                },
                body: JSON.stringify({ message: 'Ongoing' })
            });
            history('/startscore')
            window.location.reload(false);
        } else {
            alert(err)
        }
    }

    return (
        <>

            <button type="button" class="btn btn-primary" hidden id='modal-score' data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Start</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="container  border my-5" >
                                <form>
                                    <div className="form-group row">
                                        <h4 className='Matchid my-3'>Match Id: {data._id}</h4>
                                        <label for="input" className="form-text-large ">Who Won Toss?</label>
                                        <div className="form-group col-form-label">
                                            <select id="inputState" className="form-control" name='toss' onChange={onChange}>
                                                <option selected value=''>Choose...</option>
                                                {data ? <>
                                                    <option value={data.team1[0].name}>{data.team1[0].name ? data.team1[0].name : ''}</option>
                                                    <option value={data.team2[0].name}>{data.team2[0].name ? data.team2[0].name : ''}</option>
                                                </>
                                                    : ''}
                                            </select>
                                        </div>
                                    </div>
                                </form>
                                <form>
                                    <div className="form-group row">
                                        <label for="input" className="form-text-large ">Who is Batting First?</label>
                                        <div className="form-group col-form-label ">
                                            <select id="inputState" onChange={onChange} className="form-control" name='select_b'>
                                                <option selected value=''>Choose...</option>
                                                {data ? <>
                                                    <option value={data.team1[0].name}>{data.team1[0].name ? data.team1[0].name : ''}</option>
                                                    <option value={data.team2[0].name}>{data.team2[0].name ? data.team2[0].name : ''}</option>
                                                </>
                                                    : ''}
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <h5 style={{color:'red'}}>Yet to develep</h5>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <div className="div text-center my-2">
                                <button type="button" class="btn btn-info " onClick={handlesend}>Confirm </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                                {Run}
                                                {ele.status === 'Ongoing' ? '' : <a onClick={() => handlemodal(ele)} role='button' className='p-m-0'>start scoring</a>}
                                                <a role='button' className='p-m-0' onClick={() => history('/live-server')}> view </a>
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

