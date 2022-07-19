import React, { useContext, useState, useEffect } from 'react'
import HomeNav from '../Navbars/HomeNav'
import { useNavigate } from 'react-router-dom'
import profileContext from '../../context/Profile/profileContext'

function MyProfile() {
    const [update, setUpdate] = useState({ id: "", efname: "", elname: "", ephone: "", eaddress: "", edob: "" });
    const [type, setType] = useState('text');

    const history = useNavigate();

    const context = useContext(profileContext);
    const { efname, elname, ephone, eaddress, edob } = update;
    const { email } = context.udata;

    useEffect(() => {
        updateNote(context.data)
        // eslint-disable-next-line
    }, [])

    const refresh = () => {
        context.Profile();
        history('/myProfile')
    }

    const updateNote = (currentNote) => {
        setUpdate({ id: currentNote._id, efname: currentNote.fname, elname: currentNote.lname, ephone: currentNote.phone, eaddress: currentNote.address, edob: currentNote.dob })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        context.editProfile(update.id,update.efname,update.elname,update.ephone,update.eaddress,update.edob)
        alert("Profile Updated")
    }

    const onChange = (e) => {
        setUpdate({ ...update, [e.target.name]: e.target.value })
    }

    if (!sessionStorage.getItem('token')) {
        return (
            <>
                <h1>Login first</h1>
            </>
        )
    } else {
        return (
            <>
                <HomeNav />
                <div className="container-xl px-4 mt-4">
                    <div className="d-flex  flex-row-reverse">
                        <button className='btn btn-danger mb-3' onClick={refresh}><i className="fa-solid fa-arrows-rotate"></i></button>
                    </div>
                    <hr className="mt-0 mb-4" />

                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card mb-4 mb-xl-0">
                                <div className="card-header">Profile Picture</div>
                                <div className="card-body text-center">
                                    <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                    <input type="file" className='btn btn-danger' name="file"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div className="card mb-4">
                                <div className="card-header">Account Details</div>
                                <div className="card-body">
                                    <form>

                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                                <input className="form-control" id="inputFirstName" name='efname' type="text" value={efname} onChange={onChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1 " htmlFor="inputLastName">Last name</label>
                                                <input className="form-control" id="inputLastName" type="text" name="elname" value={elname} onChange={onChange} />
                                            </div>
                                        </div>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputOrgName">Address</label>
                                                <textarea className="form-control" id="inputOrgName" type="text" name="eaddress" value={eaddress} onChange={onChange} />
                                            </div>

                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                                <input className="form-control" id="inputEmailAddress" type="email" value={email} readOnly />
                                            </div>
                                        </div>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                                <input className="form-control" id="inputPhone" type="tel" value={ephone} onChange={onChange} name="ephone" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                                                <input className="form-control" id="inputBirthday" type={`${type === "text" ? "text" : "date"}`} name="edob" value={edob} onFocus={() => setType('date')} onBlur={() => setType('text')} onChange={onChange} />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pb-2">
                                            <button className="btn btn-danger my-4  btn-submit fw-bold text-uppercase" onClick={handleUpdate} type="submit">Save Changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MyProfile
