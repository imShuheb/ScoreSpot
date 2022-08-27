import { useEffect, useState } from "react";
import ProfileContext from "./profileContext";
import axios from 'axios'
const UserState = (props) => {
    const host = "http://localhost:5000";

    //start of fetching profile
    const [data, setData] = useState();
    const [udata, setUdata] = useState();

    const Profile = async () => {
        const url = `${host}/api/fetchuser`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'auth-token': sessionStorage.getItem('token'),
                'Accept': 'application/json'
            },
        });

        const pdata = await response.json();
        setData(pdata.profile);
        setUdata(pdata.user);
    }
    // end of fetching


    // edit profile section
    const editProfile = async (id, fname, lname, phone, address, dob, profileImg) => {
        // API Call 
        console.log(profileImg)
        const formData = new FormData()
        formData.append('profileImg', profileImg)
        formData.append('fname', fname)
        formData.append('lname', lname)
        formData.append('phone', phone)
        formData.append('address', address)
        formData.append('dob', dob)
        const config = {
            headers: {
                "auth-token": sessionStorage.getItem('token')
            },
        }
        axios.put(`${host}/api/updateprofile/${id}`, formData, config, {
        }).then(res => {
            console.log(res)
        })
    }
    const editProfile1 = async (id, fname, lname, phone, address, dob) => {
        // API Call 
        const response = await fetch(`${host}/api/updateprofiledata/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': sessionStorage.getItem('token'),
            },
            body: JSON.stringify({ fname, lname, phone, address, dob })
        });
        const pdata = await response.json();
        console.log(pdata)

    }


    useEffect(() => {
        Profile();
        // eslint-disable-next-line 
    })


    return (
        <ProfileContext.Provider value={{ data, udata, Profile, editProfile, editProfile1 }}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default UserState;