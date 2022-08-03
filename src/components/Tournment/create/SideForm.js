import React, { useContext } from 'react'
import userContext from '../../../context/User/userContext'
import bg from "../../../images/bg.jpg"

const SideForm = () => {
    const context = useContext(userContext)
    const players = context.playersdata

    const write = () => {
        document.write("Refresh Page")

    }

    const handleRemoveItem = (e) => {
        const user = e.target.getAttribute("name")
        context.setPlayers(players.filter(item => item.user !== user));
    };

    return (
        <>
            <img src={bg} alt="-" style={{ height: "74vh", width: "65vw",position:"absolute" }} />

            {Array.isArray(players)
                // eslint-disable-next-line
                ? players.map(ele => {
                    return (

                        <div className="col-sm-3">
                            <div className="card mb-3 " style={{ maxWidth: "15rem" }}>
                                <div className="card-header text-uppercase h6 d-flex justify-content-between">{ele.fname} {ele.lname}
                                    <button className='btn btn-outline-danger small' name={ele.user} onClick={handleRemoveItem}>
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                                <div className="card-body">
                                    <p className='card-text'>
                                       <small> Phone no :  {ele.phone}</small>
                                    </p>
                                    <p className="card-text">

                                    </p>
                                </div>

                            </div>
                        </div>
                    )
                }) : write}

           
        </>
    )
}

export default SideForm