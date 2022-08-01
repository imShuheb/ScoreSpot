import React, { useContext, useState } from 'react'
import HomeNav from '../Navbars/HomeNav'
import SideNav from '../Navbars/SideNav'
import TeamListSide from './TeamListSide'
import Teamselect from './Teamselect'
const Schedule = () => {


    return (
        <>
            <HomeNav />
            <div className="side">
                <SideNav />
                <TeamListSide />
                <Teamselect />
            </div>

        </>
    )
}

export default Schedule