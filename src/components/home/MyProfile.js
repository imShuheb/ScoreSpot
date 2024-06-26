import React, { useContext, useState, useEffect } from 'react'
import HomeNav from '../Navbars/HomeNav'
import { useNavigate } from 'react-router-dom'
import profileContext from '../../context/Profile/profileContext'

function MyProfile() {
    const [update, setUpdate] = useState({ id: "", efname: "", elname: "", ephone: "", eaddress: "", edob: "", eprofileImg: '' });
    const [type, setType] = useState('text');
    const [img1, setimg1] = useState({ eprofileImg: '' })

    const history = useNavigate();

    const context = useContext(profileContext);
    const { efname, elname, ephone, eaddress, edob } = update;
    const { email } = context.udata;

    useEffect(() => {
        context.Profile();
        updateNote(context.data)
        // eslint-disable-next-line
    }, [])


    const updateNote = (currentNote) => {
        setUpdate({ id: currentNote._id, efname: currentNote.fname, elname: currentNote.lname, ephone: currentNote.phone, eaddress: currentNote.address, edob: currentNote.dob, eprofileImg: currentNote.profileImg })
        console.log(currentNote.profileImg)
    }

    const test = (str) => {
        return /\d/.test(str)
    }

    const number = (str) => {
        return /\D/.test(str)
    }

    // const img = (e) => {
    //     setimg1({ eprofileImg: e.target.files[0] })
    // }

    const handleUpdate = (e) => {
        e.preventDefault();

        if (number(update.ephone)) {
            alert('Phone number should not have alphabets')
            return
        }
        if (update.ephone.length > 10 || update.ephone.length < 10) {
            alert('Phone number should be 10 digits')
            return
        }
        if (test(update.efname) || test(update.elname)) {
            alert('Name should not contain Numbers')
            return
        }

        if (img1.eprofileImg === '') {
            context.editProfile1(update.id, update.efname, update.elname, update.ephone, update.eaddress, update.edob)
            alert("Profile Updated")
            history('/home')
            window.location.reload(false);
            return true;

        } else {
            context.editProfile(update.id, update.efname, update.elname, update.ephone, update.eaddress, update.edob, img1.eprofileImg)
            alert("Profile Updated")
            history('/home')
            window.location.reload(false);
            return true;
        }
    }

    const onChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (!re.test(update.ephone)) {
            alert('numbers only')
        }
        setUpdate({ ...update, [e.target.name]: e.target.value })
    }

    const img = (e) => {
        setimg1({ ...update, eprofileImg: e.target.files[0] })
    }

    if (!sessionStorage.getItem('token')) {
        return (
            <>
                <h1>Login first</h1>
            </>
        )
    } else {
        if (context.data) {
            return (
                <>
                    <HomeNav />
                    <div className="container-xl px-4 mt-4">
                        <hr className="mt-0 mb-4" />

                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card mb-4 mb-xl-0">
                                    <div className="card-header">Profile Picture</div>
                                    <div className="card-body text-center">
                                        {/* <img className=" mb-2" src={update.eprofileImg !== '' ? update.eprofileImg : 'http://bootdey.com/img/Content/avatar/avatar1.png'} alt="" style={{ width: 'auto', height: '250px' }} />
                                        <input type="file" className='btn btn-danger' onChange={img} name="profileImg" /> */}
                                        <div className="d-flex justify-content-center">

                                            <label htmlFor="imageup">
                                                <div className="col-lg-9">
                                                    <img className=" mb-2" src={update.eprofileImg !== '' ? update.eprofileImg : ''} alt="" style={{ width: 'auto', height: '200px', borderRadius: '10px', border: '5px solid black', }} />
                                                </div>
                                                <div className="col-sm-12">

                                                    <input type="file" style={{ display: 'none', visibility: 'none' }} className='' onChange={img} name="profileImg" placeholder='image' id='imageup' />
                                                    <i className='fa-solid fa-file-image fa-3x m-3' id='imageupicon'>
                                                        <h6 className='m-3'>Click To Upload! </h6></i>
                                                </div>
                                            </label>
                                        </div>
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
                                                    <input className="form-control" id="inputFirstName" name='efname' type="text" value={efname ? efname : ''} onChange={onChange} />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="small mb-1 " htmlFor="inputLastName">Last name</label>
                                                    <input className="form-control" id="inputLastName" type="text" name="elname" value={elname ? elname : ''} onChange={onChange} />
                                                </div>
                                            </div>
                                            <div className="row gx-3 mb-3">
                                                <div className="col-md-6">
                                                    <label className="small mb-1" htmlFor="inputOrgName">Address</label>
                                                    <textarea className="form-control" id="inputOrgName" type="text" name="eaddress" value={eaddress ? eaddress : ''} onChange={onChange} />
                                                </div>

                                                <div className="mb-3 col-md-6">
                                                    <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                                    <input className="form-control" id="inputEmailAddress" type="email" value={email ? email : ''} readOnly />
                                                </div>
                                            </div>
                                            <div className="row gx-3 mb-3">
                                                <div className="col-md-6">
                                                    <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                                    <input className="form-control" id="inputPhone" type="tel" value={ephone ? ephone : ''} onChange={onChange} name="ephone" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                                                    <input className="form-control" id="inputBirthday" type={`${type === "text" ? "text" : "date"}`} name="edob" value={edob ? edob : ''} onFocus={() => setType('date')} onBlur={() => setType('text')} onChange={onChange} />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center pb-2">
                                                <button style={{width:'55vw'}} className="btn btn-danger my-4  btn-submit fw-bold text-uppercase" onClick={handleUpdate} type="submit">Save Changes</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <div>
                    Not found
                </div>
            )
        }
    }
}

export default MyProfile
