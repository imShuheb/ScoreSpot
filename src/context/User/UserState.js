import userContext from "./userContext";
import { useState } from 'react'

const Teams = (props) => {
    const host = "http://localhost:5000";

    const second = ""
    const [Data, setData] = useState(second);
    const [playersdata,setPlayers] = useState('')
    
    const Players = async () => {
        const url = `${host}/api/auth/userlist`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
        });
        const pdata = await response.json();
        await setData(pdata);
    }

    return (
        <userContext.Provider value={{Data,Players,setPlayers,playersdata }}>
            {props.children}
        </userContext.Provider>
    )
}

export default Teams;