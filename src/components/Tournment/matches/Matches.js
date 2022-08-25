import React, { useContext, useEffect } from 'react'
import SideNav from '../../Navbars/SideNav'
import HomeNav from '../../Navbars/HomeNav'
import MatchList from './MatchList'
import userContext from '../../../context/User/userContext'
import side from '../../../images/side.jpg'


const Matches = () => {
    const context = useContext(userContext)
    const matches = context.matches
    console.log(matches.teams)
    // useEffect(() => {
    //     // context.check(context.matches[0].user);
    // }, [])
    {
        return (
            <>
                <HomeNav />
                <div className="side">
                    <SideNav />
                </div>
                <div className="d-flex">

                    <div className="container-size mt-5 scroll red-bar " style={{ marginLeft: "150px" }}>
                        <MatchList />

                    </div>
                    <div className="container-fulid">
                        <img src={side} alt="-" style={{ width: '450px', height: '91vh' }} />
                    </div>
                </div>
            </>
        )
    }
}

export default Matches
