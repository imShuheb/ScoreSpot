import userContext from "./userContext";
import { useState } from 'react'

const Users = (props) => {
    const host = "http://localhost:5000";

    const second = ""
    const [Data, setData] = useState(second);
    const [playersdata, setPlayers] = useState(second)

    const Players = async () => {
        const url = `${host}/api/userlist`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
        });
        const pdata = await response.json();
        setData(pdata);

    }
    // edit profile section
    const addTeam = async (data,name) => {
        // API Call 
        const response =  await fetch(`${host}/teams/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": sessionStorage.getItem('token')
            },
            body: JSON.stringify({ name,data })
        });
        const res = await response.json();
        const err = res.error
        if(err){ alert(err)}
    }
    // end edit profile section

    return (
        <userContext.Provider value={{ Data, Players, setPlayers, addTeam, playersdata }}>
            {props.children}
        </userContext.Provider>
    )
}

export default Users;