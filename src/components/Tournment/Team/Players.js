import React, { useContext, useState } from 'react'
import userContext from '../../../context/User/userContext'


const Players = () => {

    const context = useContext(userContext)
    const data = context.Data;
    const player = []

    const [list, setlist] = useState(player);
    const [searchTerm, setSearchTerm] = useState('')

    const handleSide = (event, mess) => {
        setlist([...list, mess])
        console.log(list)
    }

    const write = () => {
        return (
            <div>hi</div>
        )
    }


    return (
        <>
            <center>
                <input type="text" placeholder='Search' className='search' onChange={(event) => { setSearchTerm(event.target.value) }} />
            </center>
            {Array.isArray(data) ? data.filter((val) => {
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
                                <strong className="card-title text-uppercase">{ele.name}  </strong>
                                <button onClick={event => handleSide(event, ele._id)} className="btn btn-outline-danger ">+</button>
                            </div>
                        </div>
                    </div>
                )
            }) : write}

        </>
    )
}

export default Players