import React, { useContext } from 'react'
import userContext from '../../context/User/userContext'


const TeamListSide = () => {
    const context = useContext(userContext);
    const teams = context.save;
    console.log(teams)
    const write = () => {
        document.write("Refresh Page")
    }

    // const handleRemoveItem = (e) => {
    //     const user = e.target.getAttribute("name")
    //     context.setTeams(teams.filter(item => item.user !== user));
    // };

    return (
        <>
            <div className="main_content">
                <div className="info" >
                    <div className="container scroll red-bar" style={{ marginTop: "45px" }}>
                        <div className="row">
                            {Array.isArray(teams)
                                // eslint-disable-next-line
                                ? teams.map(ele => {
                                    <div class="card text-white bg-danger mb-3" key={ele._id} style={{ maxWidth: "18rem" }}>
                                        <div class="card-header">{ele.name}</div>
                                        <div class="card-body">
                                            <h5 class="card-title">Danger card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                }) : write}
                        </div>
                        <div className="row">
                            hi
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default TeamListSide
