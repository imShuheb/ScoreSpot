import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const [elements, setElements] = useState({
        fname: "", lname: "", address: "", dob: "",
        phone: "", batsman: "", bowller: "", wicketKeeper: "", allRounder: ""
    })

    let history = useNavigate();
    const handleOut = () => {
        history("/");
    }
    const num_phone = parseInt(elements.phone)
    const handleSubmite = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':sessionStorage.getItem('token')

            },
            body: JSON.stringify({
                fname: elements.fname, lname: elements.lname, address: elements.address,
                dob: elements.dob, phone: num_phone, batsman: elements.batsman, bowller: elements.bowller, wicketKeeper: elements.wicketKeeper, allRounder: elements.allRounder
            })
        });
        const json = await response.json()
        if (json.success) {
            history("/home");
        }
        else {
            alert("something went wrong");
        }
    }

    const onChange = (e) => {
        setElements({ ...elements, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div>
                <div className="d-flex flex-row px-4 p-3 bg-light d-sm-flex">
                    <button className=" btn btn-outline-secondary justify-content-center " aria-current="page" onClick={handleOut}><i className="fa-solid fa-arrow-left-long" style={{ width: "60px" }}></i> </button>
                </div>
                <div className="container ">
                    <div className="d-lg-flex justify-content-center my-4">
                        <form>

                            <div className="text-center">
                                <label className="form-label fw-bold text-uppercase fs-4 u">Profile update</label>
                            </div>

                            <div className="control-form-profil input-icons boarder my-3">
                                <div className="form-floating mb-3 my-2">
                                    <i className="fa-solid fa-user icon"></i>
                                    <input type="fname" className="form-control i " id="floatingInput" placeholder="First Name" name='fname' onChange={onChange} />
                                    <label className='input-field' htmlFor="floatingInput">First Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <i className="fa-solid fa-user-group icon"></i>
                                    <input type="fname" className="form-control i " id="floatingInput" placeholder="First Name" name='lname' onChange={onChange} />
                                    <label className='input-field' htmlFor="floatingInput">Last Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <i className="fa-solid fa-location icon"></i>
                                    <textarea textarea="address" rows="4" cols="50" className="form-control i" id="address" placeholder="Address" name='address' onChange={onChange} />
                                    <label className='input-field' htmlFor="floatingPassword">Address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <div className="form-floating mb-3">
                                        <input type="date" className="form-control i " id="floatingInput" placeholder="First Name" name='dob' onChange={onChange} />
                                        <label className='input-field' htmlFor="floatingInput">Date of birth</label>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <div className="form-floating mb-3">
                                        <i className="fa-solid fa-address-book icon"></i>
                                        <input type="fname" className="form-control i " id="floatingInput" name='phone' placeholder="First Name" onChange={onChange} />
                                        <label className='input-field' htmlFor="floatingInput">Phone Number</label>
                                    </div>
                                </div>
                                <div className="container py-2 mx-5">

                                    <h5 className="u"> WHAT ARE YOU</h5>
                                    <div className="form-check">
                                        <img src="https://img.icons8.com/material-outlined/20/000000/baseball-player.png" className='mx-1' alt='-' />
                                        <input className="form-check-input" type="checkbox" name='batsman' value="batsman" id="flexCheckDefault" onChange={onChange} />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Bats man
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/20/000000/external-cricket-ball-sports-and-games-icongeek26-glyph-icongeek26.png" className='mx-1' alt='-' />
                                        <input className="form-check-input " type="checkbox" name='bowller' value="bowller" id="flexCheckChecked" onChange={onChange} />
                                        <label className="form-check-label " htmlFor="flexCheckChecked">
                                            Bowller
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/20/000000/external-wicket-sports-and-games-icongeek26-glyph-icongeek26.png" className='mx-1' alt='-' />
                                        <input className="form-check-input " type="checkbox" name='wicketKeeper' value="wicketKeeper" id="flexCheckChecked" onChange={onChange} />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Wicket-keeper
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/20/000000/external-cricket-hobbies-and-interest-smashingstocks-mixed-smashing-stocks.png" className='mx-2' alt='-' />
                                        <input className="form-check-input " type="checkbox" name='allRounder' value="allRounder" id="flexCheckChecked" onChange={onChange} />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            All rounder
                                        </label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center pb-2">
                                    <button className="btn btn-danger my-4  btn-submit fw-bold text-uppercase" type="submit" onClick={handleSubmite}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
