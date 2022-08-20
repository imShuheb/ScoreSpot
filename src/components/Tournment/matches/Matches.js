import React, { useContext, useEffect } from 'react'
import SideNav from '../../Navbars/SideNav'
import HomeNav from '../../Navbars/HomeNav'
import MatchList from './MatchList'
import userContext from '../../../context/User/userContext'


const Matches = () => {
    const context = useContext(userContext)
    const matches = context.matches
    console.log(matches.teams)
    // useEffect(() => {
    //     // context.check(context.matches[0].user);
    // }, [])
    if (matches.teams.lenght === null) {
        return (
            <>
                <HomeNav />
                <div className="side">
                    <SideNav />
                </div>
                <div className="d-flex justify-content-center" style={{ marginTop: '300px' }}>
                    <div className='h3 text-capitalize'>Schedule to see </div>
                </div>
            </>
        )

    } else {
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
}

export default Matches
