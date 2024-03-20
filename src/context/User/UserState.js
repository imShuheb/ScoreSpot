import userContext from "./userContext";
import { useState, useEffect } from 'react'

const Users = (props) => {
    const host = "http://localhost:5000";
    const second = ''
    const [Data, setData] = useState(second);
    const [teams, setTeams] = useState(second)
    const [save, setSave] = useState(second)
    const [playersdata, setPlayers] = useState(second)
    const [matches, setmatches] = useState('')
    const [usercheck, setcheck] = useState(second)

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

    const addTeam = async (data, name) => {
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

    const addSchedule = async (data) => {
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

    const getSchedule = async () => {
        const response = await fetch(`${host}/teams/matchlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const res = await response.json();
        console.log(res)
        setmatches(res);
    }

    const check = async (id) => {
        const { user } = id
        console.log(user)
        const response = await fetch(`${host}/teams/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": sessionStorage.getItem('token')
            },
            body: JSON.stringify({ user })
        });
        const res = await response.json();
        setcheck(res)
        if (res.success === "true") {
            return true;
        }
        else {
            return false;
        }
    }



    useEffect(() => {
        Players();
        Teams();
        getSchedule();
    }, [])

    return (
        <userContext.Provider value={{ Data, matches, playersdata, teams, save, usercheck, Players, setPlayers, addTeam, setSave, setTeams, addSchedule, check }}>
            {props.children}
        </userContext.Provider>
    )
}

export default Users;