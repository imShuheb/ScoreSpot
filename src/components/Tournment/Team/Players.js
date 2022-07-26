import React, { useContext, useState } from 'react'
import userContext from '../../../context/User/userContext'

const Players = () => {

    const context = useContext(userContext)
    const [searchTerm, setSearchTerm] = useState('')

    const data = context.Data;
    const player = context.playersdata

    
    const handleSide = (event, mess) => {
<<<<<<< HEAD
        if (list.length > 11) {
            return alert("cannot insert more thn 12 players")
        } else {
            if (list.includes(mess)) {
                return alert("Player already exists")
            } else {
                setlist([...list, mess])
                console.log(list)
=======
        if (player.length > 11) {
            return alert("Cannot have more than 12 Team mates")
        } else {
            if (player.includes(mess)) {
                return alert("Player already exists")
            } else {
                context.setPlayers([...player, mess])
                // context.setPlayers(list)
>>>>>>> f0234ddad3028152b6509343c98c13f655448b96
            }
        }
    }

    const write = () => {
        document.write("Refresh Page")
<<<<<<< HEAD
=======

>>>>>>> f0234ddad3028152b6509343c98c13f655448b96
    }

    return (
        <>
            <center>
                <input type="text" placeholder='Search' className='search' onChange={(event) => { setSearchTerm(event.target.value) }} />
            </center>
            {Array.isArray(data)
<<<<<<< HEAD
                // eslint-disable-next-line 
                ? data.filter((val) => {
                    if (searchTerm === " ") {
                        return val;
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
=======
                // eslint-disable-next-line
                ? data.filter((val) => {
                    if (searchTerm === "") {
                        return val;
                    } else if (val.fname.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    } 
                    
>>>>>>> f0234ddad3028152b6509343c98c13f655448b96
                }).map(ele => {
                    return (
                        <div className="container my-3 card-size" key={ele._id}>
                            <div className="card mx-4">
                                <div className="card-body d-flex justify-content-between">
<<<<<<< HEAD
                                    <strong className="card-title text-uppercase">{ele.name}  </strong>
                                    <button onClick={event => handleSide(event, ele._id)} className="btn btn-outline-danger ">+</button>
=======
                                    <strong className="card-title text-uppercase">{ele.fname} {ele.lname}  </strong>
                                    <button onClick={event => handleSide(event, ele)} className="btn btn-outline-danger ">+</button>
>>>>>>> f0234ddad3028152b6509343c98c13f655448b96
                                </div>
                            </div>
                        </div>
                    )
                }) : write}

        </>
    )
}

export default Players