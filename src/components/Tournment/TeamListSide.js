import React, { useContext } from 'react'
import userContext from '../../context/User/userContext'
import vs from '../../images/vs.jpg'


const TeamListSide = () => {
    const context = useContext(userContext);
    const teams = context.save;


    const write = () => {
        document.write("Refresh Page")
    }

    // const handleRemoveItem = (e) => {
    //     const user = e.target.getAttribute("name")
    //     context.setSave(context.save.filter(item => item._id !== user));
    // };

    return (
        <>
            <div className="main_content my-3 ">
                <div className="info" >
                    <div className="container scroll red-bar bord" >
                        <div class="relative">
                            <img src={vs} alt="Norway" style={{ width: "95%", height: "95%" }} />
                            <div class="text-block d-flex">
                                {Array.isArray(teams)
                                    // eslint-disable-next-line 
                                    ? teams.map(ele => {
                                        return (
                                            <div className='col-sm-5 text-uppercase' style={{ marginLeft: "70px"}}>
                                                <text>{ele.name}</text>
                                            </div>
                                        )
                                    }) : write}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamListSide
