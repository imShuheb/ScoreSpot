import React, { useContext } from 'react'
import userContext from '../../../context/User/userContext'


const Players = () => {
    const context = useContext(userContext)
    const data = context.Data;
    // for (let index = 0; index < context.Data.length; index++) {
    //     const element = context.Data[index];
    //     console.log(element)
    // }
    return (
        <>
             <div className="container mx-2"> 
                {data.length===0 && 'No Users to display'}
                </div>
                
                
        </>
    )
}

export default Players