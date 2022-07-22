import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Register() {
    // const [show,setshow] = useState(true);
    const [credentials, setCredentials] = useState({ email: "", password: "", name: "", cpassword: ""})
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (credentials.password!==credentials.cpassword) {
            alert('Password Mismatch');
            return  history("/reg");
        }
        const { name, password } = credentials
        const response = await fetch("http://localhost:5000/api/auth/reg", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({ name, email:credentials.email.toLowerCase(), password })
        });

        const json = await response.json()
        if (json.success === "true") {
            // Save the auth token and redirect
            sessionStorage.setItem('token',json.Tocken);
            history("/profile");
        }
        else {
            alert("Email already exists");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card flex-row my-3 border-0 shadow rounded-3 overflow-hidden">
                            <div className="card-img-left d-none d-md-flex">
                            </div>
                            <div className="card-body p-sm-5">
                                <h1 className="card-title text-center mb-3 fs-1">Register
                                    <br /><img src={logo} className='p-3' alt="noimg" /></h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input type="name" className="form-control no" name='name' id="name" placeholder="name@example.com" onChange={onChange} />
                                        <label htmlFor="name">Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control no" name='email' id="email" placeholder="name@example.com" onChange={onChange} />
                                        <label htmlFor="email">Email address</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="password" placeholder="Password" name='password' required minLength={5} onChange={onChange} />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" name='cpassword' required minLength={5} onChange={onChange} />
                                        <label htmlFor="cpassword">Confirm Password</label>
                                    </div>
                                    <div className="d-grid mb-2">
                                        <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
                                    </div>
                                    <Link className="d-block text-center mt-2 small" to='/'>Have an account? Login In</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
