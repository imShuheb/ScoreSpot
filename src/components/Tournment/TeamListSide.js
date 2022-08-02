import React, { useContext } from 'react'
import userContext from '../../context/User/userContext'
import vs from '../../images/vs.jpg'


const TeamListSide = () => {
    const context = useContext(userContext);
    const teams = context.save;


    const write = () => {
        document.write("Refresh Page")
    }

    const handleRemoveItem = (e) => {
        if(teams.lenght === ''){
            alert("select teams to remove")
        }else{
            context.setSave('');
            
        }
    };

    return (
        <>
            <div className="main_content my-3 ">
                <div className="d-flex justify-content-around">
            <button className="btn btn-danger ml-auto p-2" onClick={handleRemoveItem}>Clear</button>
                </div>
                <div className="info" >
                    <div className="container no-scroll red-bar bord" >
                        <div class="relative">
                            <img src={vs} className='img-fluid' alt="Norway" style={{ width: "95%", height: "95%" }} />
                            <div class="text-block">
                                <div className="row" style={{marginTop:"30px"}}>
                                    {Array.isArray(teams)
                                        // eslint-disable-next-line 
                                        ? teams.map(ele => {
                                            const { name } = ele
                                            return (
                                                <div className='col-md-6 text-uppercase'>
                                                    <h2>{name}</h2>
                                                </div>
                                            )
                                        }) : write}
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamListSide
