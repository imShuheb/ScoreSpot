import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userContext from '../../context/User/userContext'


const Teamselect = () => {
    const context = useContext(userContext);
    const history = useNavigate();
    const [searchTerm, setSearchTerm] = useState('')
    const data = context.teams;

    const write = () => {
        document.write("Refresh Page")
    }

    const handleSide = (event, mess) => {
        if (context.save.length > 1) {
            return alert("2 Teams are already selected")
        } else {
            if (context.save.includes(mess)) {
                return alert("Teams already exists")
            } else {
                context.setSave([...context.save, mess])
            }
        }
    }

    const handle = () => {
        history("/home")
    }
    return (
        <>
            <div className="teamsContainer">
                <center>
                    <input type="text" placeholder='Search' className='search' onChange={(event) => { setSearchTerm(event.target.value) }} />
                </center>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

                <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>

                            </div>
                            {Array.isArray(data)
                                // eslint-disable-next-line 
                                ? data.map(ele => {
                                    return (
                                        <div className="container my-3 card-size" key={ele._id}>
                                            <div className="card mx-4">
                                                <div className="card-body row justify-content-between no-p-m ">
                                                    <h4 className=" text-uppercase col-sm-6 text-center"> {ele.name} </h4>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : write}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


                {Array.isArray(data)
                    // eslint-disable-next-line 
                    ? data.filter((val) => {
                        if (searchTerm === " ") {
                            return val;
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }).map(ele => {
                        return (
                            <div className="container my-3 card-size" key={ele._id}>
                                <div className="card mx-4">
                                    <div className="card-body row justify-content-between no-p-m ">
                                        <h4 className=" text-uppercase col-sm-6 text-center"> {ele.name} </h4>
                                        <div className="col-sm-6">
                                            <div className="row justify-content-end text-center" style={{ marginLeft: "30px" }}>
                                                <a className='no-p-m' onClick={handle} role="button" >Detials</a>
                                                <a className='no-p-m' onClick={event => handleSide(event, ele)} role="button" >Add</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : write}
            </div>
        </>
    )
}

export default Teamselect

