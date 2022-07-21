import React from 'react'
import { Link } from 'react-router-dom'


const SideNav = () => {
    return (
        <>
            <div className="side">
                <div className="sidebar justify-content-center ">
                    <h2>ScoreSpot</h2>
                    <ul style={{ paddingLeft: "0%" }}>
                        <li ><Link to="/home" ><i className={`fas fa-address-book`}></i>Home</Link></li>
                        <li><Link to="/teams"><i className="fas fa-home"></i>Teams</Link></li>
                        <li><Link to="/scores"><i className="fas fa-user"></i>Scores</Link></li>
                        <li><Link to="/grounds"><i className="fas fa-map-pin"></i>Grounds</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideNav