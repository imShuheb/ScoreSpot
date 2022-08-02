import React, { useContext, useState } from 'react'
import HomeNav from '../Navbars/HomeNav'
import SideNav from '../Navbars/SideNav'
import TeamListSide from './TeamListSide'
import Teamselect from './Teamselect'
const Schedule = () => {


    return (
        <div className='no-scroll'>
            <HomeNav />
            <div className="side">
                <SideNav />
                <TeamListSide />
                <Teamselect />
            </div>

        </div>
    )
}

export default Schedule