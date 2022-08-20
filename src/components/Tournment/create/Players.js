import React, { useContext, useState } from 'react'
import userContext from '../../../context/User/userContext'


const Players = () => {

    const context = useContext(userContext)
    const data = context.Data;
    const player = context.playersdata
    const [searchTerm, setSearchTerm] = useState('')

    const handleSide = (event, mess) => {
        if (player.length > 10) {
            return alert("Cannot Have More Than 11 Players")
        } else {
            if (player.includes(mess)) {
                return alert("Player already exists")
            } else {
                context.setPlayers([...player, mess])
            }
        }
    }

    const write = () => {
        document.write("Refresh Page")
    }

    return (
        <>
            <center>
                <input type="text" placeholder='Search' className='search' onChange={(event) => { setSearchTerm(event.target.value) }} />
            </center>
            {Array.isArray(data)
                // eslint-disable-next-line 
                ? data.filter((val) => {
                    if (searchTerm === " ") {
                        return val;
                    } else if (val.fname.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map(ele => {
                    return (
                        <div className="container my-3 card-size" key={ele._id}>
                            <div className="card mx-4">
                                <div className="card-body d-flex justify-content-between">
                                    <img src={ele.profileImg} style={{width:'40px',height:'40px',borderRadius:'100px'}} alt="" />
                                    <strong className="card-title text-uppercase">{ele.fname} {ele.lname}  </strong>
                                    <button onClick={event => handleSide(event, ele)} className="btn btn-outline-danger ">+</button>
                                </div>
                            </div>
                        </div>
                    )
                }) : write}

        </>
    )
}

export default Players