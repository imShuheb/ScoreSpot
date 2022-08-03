import userContext from "./userContext";
import { useState, useEffect } from 'react'

const Users = (props) => {
    const host = "http://localhost:5000";

    const second = ""
    const [Data, setData] = useState(second);
    const [teams, setTeams] = useState(second)
    const [save, setSave] = useState(second)
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
    const Teams = async () => {
        const url = `${host}/teams/teamlist`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        });
        const pdata = await response.json();
        setTeams(pdata);
    }

    useEffect(() => {
        Players();
        Teams();
    }, [])

    // edit profile section
    const addTeam = async (data, name) => {
        // API Call 
        const response = await fetch(`${host}/teams/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": sessionStorage.getItem('token')
            },
            body: JSON.stringify({ name, data })
        });
        const res = await response.json();
        const err = res.error
        if (err) { alert(err) }
    }
    // end edit profile section 

    // start schedule
    const addSchedule = async (data) => {
        // API Call 
        console.log(data)
        const { date, time, ground, balltype, overs, perbowler } = data
        const response = await fetch(`${host}/teams/schedule/match`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": sessionStorage.getItem('token')
            },
            body: JSON.stringify({ date, time, ground, team1: data[0], team2: data[1], balltype, overs, perbowler })
        });
        const res = await response.json();
        const err = res.error
        if (err) { alert(err) }
    }
    // end

    return (
        <userContext.Provider value={{ Data, Players, setPlayers, addTeam, playersdata, teams, save, setSave, setTeams, addSchedule }}>
            {props.children}
        </userContext.Provider>
    )
}

export default Users;