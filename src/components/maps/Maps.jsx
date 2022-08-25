import React from 'react'
import HomeNav from '../Navbars/HomeNav'
import SideNav from '../Navbars/SideNav'
import Items from './Items'

const Maps = () => {
    return (
        <>
            <HomeNav />
            <SideNav />
            <div className="container my-5">
                <Items/>
            </div>
        </>
    )
}

export default Maps
