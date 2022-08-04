import React, { useContext, useEffect } from 'react'
import SideNav from '../../Navbars/SideNav'
import HomeNav from '../../Navbars/HomeNav'
import MatchList from './MatchList'
import userContext from '../../../context/User/userContext'


const Matches = () => {
    const context = useContext(userContext)

    // useEffect(() => {
    //     // context.check(context.matches[0].user);
    // }, [])
    
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
                    <img src="" alt="-" />hello
                </div>
            </div>
        </>
    )
}

export default Matches
