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
            <div class="container scroll red-bar" style={{height:'63vh'}}>

                <img src={bg} alt="-" style={{ height: "80vh", width: "65vw", position: "absolute" }} />
                <div className="row p-3">

                    {Array.isArray(players)
                        // eslint-disable-next-line
                        ? players.map(ele => {
                            return (

                                <div className="col-sm-3">
                                    <div className="card mb-3 " style={{ maxWidth: "15rem" }}>
                                        <div className="card-header text-uppercase h6 d-flex justify-content-between">
                                            <img src={ele.profileImg} style={{ width: '40px', height: '40px', borderRadius: '100px' }} alt="" />
                                            <button className='btn btn-outline-danger small' name={ele.user} onClick={handleRemoveItem}>
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                        </div>
                                        <div className="card-text p-2">
                                            <p className='card-text text-capitalize p-0 m-0'>
                                                <small>Name : {ele.fname} {ele.lname}</small><br />
                                                <small> Phone no :  {ele.phone}</small>
                                            </p>
                                            <p className='card-text text-capitalize'>
                                                <ol className='' style={{ listStyleType: 'decimal', padding: '0', margin: '0' }}>
                                                    {ele.batsman ? <>
                                                        <li>
                                                            <small>
                                                                <strong>
                                                                    <img src="https://img.icons8.com/material-outlined/20/000000/baseball-player.png" className='mx-1' alt='-' />  {ele.batsman}
                                                                </strong>
                                                            </small>
                                                        </li>
                                                    </> : ''}
                                                    {ele.wicketKeeper ? <>
                                                        <li>
                                                            <small>
                                                                <strong>
                                                                    <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/20/000000/external-wicket-sports-and-games-icongeek26-glyph-icongeek26.png" className='mx-1' alt='-' />  {ele.wicketKeeper}
                                                                </strong>
                                                            </small>
                                                        </li>
                                                    </> : ''}
                                                    {ele.bowller ? <>
                                                        <li>
                                                            <small>
                                                                <strong>
                                                                    <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/20/000000/external-cricket-ball-sports-and-games-icongeek26-glyph-icongeek26.png" className='mx-1' alt='-' /> {ele.bowller}
                                                                </strong>
                                                            </small>
                                                        </li>
                                                    </> : ''}
                                                    {ele.allRounder ? <>
                                                        <li>
                                                            <small>
                                                                <strong>
                                                                    <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/20/000000/external-cricket-hobbies-and-interest-smashingstocks-mixed-smashing-stocks.png" className='mx-2' alt='-' />    {ele.allRounder}
                                                                </strong>
                                                            </small>
                                                        </li>
                                                    </> : ''}
                                                </ol>
                                            </p>


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

export default SideForm