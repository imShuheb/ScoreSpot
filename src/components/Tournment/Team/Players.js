import React, { useContext } from 'react'
import userContext from '../../../context/User/userContext'


const Players = () => {

    const context = useContext(userContext)
    const data = context.Data;

    const handleSide = ()=>{
    }

    return (
        <>
            {data.map(ele => {
                return (
                    <div className="container my-3" key={ele._id}>
                        <div className="card">
                            <div className="card-body d-flex justify-content-between">
                                <strong className="card-title text-uppercase">{ele.name}  </strong>
                                <button onClick={handleSide} className="btn btn-outline-danger ">+</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default Players