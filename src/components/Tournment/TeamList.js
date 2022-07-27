import React, { useContext, useState } from 'react'
import HomeNav from '../Navbars/HomeNav'
import SideNav from '../Navbars/SideNav'
import userContext from '../../context/User/userContext'
import TeamListSide from './TeamListSide'
const Schedule = () => {
    const context = useContext(userContext);
    const [searchTerm, setSearchTerm] = useState('')
    const data = context.teams;

    const write = () => {
        document.write("Refresh Page")
    }

    const handleSide = (event, mess) => {
        if (context.save.length > 2) {
            return alert("2 => Teams are already selected")
        } else {
            if (context.save.includes(mess)) {
                return alert("Player already exists")
            } else {
                context.setSave([...context.save, mess])
            }
        }
    }

    return (
        <>
            <HomeNav />
            <div className="side">
                <SideNav />
                <TeamListSide/>
                <div className="newsContainer">
                    <center>
                        <input type="text" placeholder='Search' className='search' onChange={(event) => { setSearchTerm(event.target.value) }} />
                    </center>
                    {Array.isArray(data)
                        // eslint-disable-next-line 
                        ? data.filter((val) => {
                            if (searchTerm === " ") {
                                return val;
                            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map(ele => {
                            return (
                                <div className="container my-3 card-size" key={ele._id}>
                                    <div className="card mx-4">
                                        <div className="card-body d-flex justify-content-between">
                                            <strong className="card-title text-uppercase">{ele.name} </strong>
                                            <button className="btn btn-outline-danger" onClick={event => handleSide(event, ele)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : write}

                </div>
            </div>

        </>
    )
}

export default Schedule