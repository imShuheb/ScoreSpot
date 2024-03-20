import { useState } from "react";
import scoreContext from "./scoreContext";

const UserState = (props) => {


    return (
        <scoreContext.Provider value={{  }}>
            {props.children}
        </scoreContext.Provider>
    )
}

export default UserState;