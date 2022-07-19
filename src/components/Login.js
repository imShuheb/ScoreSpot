import React, { useState } from 'react'
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        if (json.success){
            sessionStorage.setItem('token', json.Tocken); 
            history("/home");
        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div id='roll-log'> 
                <div className="wrapper my-5" >
                    <div className="logo" >
                        <img src={logo} alt="IMgscc" />
                    </div>
                    <div className="text-center mt-4 name">
                        sCorespot
                    </div>
                    <form className="p-3 mt-3" mode='POST' onSubmit={handleSubmit}>
                        <div className="form-field d-flex align-items-center" >
                            <span className="far fa-user"></span>
                            <input type="text" name="email" id="email " value={credentials.email} onChange={onChange} placeholder="Username" />
                        </div>

                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="password" name="password" value={credentials.password} onChange={onChange}  id="pass" placeholder="Password" />
                        </div>
                        <button type="submit" className='btn mt-3'>Login</button>
                    </form>
                    <div className="text-center fs-6">
                        <a href="/reg">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
