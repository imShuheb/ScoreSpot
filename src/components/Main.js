import React from 'react'
import Container from "./Container";
import Navbar from "./Navbars/Navbar";
import About from "./About";
import Features from './Features'
import Login from './Login';
// import AuthState from '../context/AuthState'

export default function Main() {
    return (
        <div>
            {/* <AuthState> */}
                <Navbar />
                <Container />
                <Features />
                <About />
                <Login />
            {/* </AuthState> */}
        </div>
    )
}
