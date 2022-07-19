import { useState } from "react";
import ProfileContext from "./profileContext";

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
    const editProfile = async (id,fname, lname, phone, address, dob) => {
        // API Call 
        await fetch(`${host}/api/updateprofile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": sessionStorage.getItem('token')
            },
            body: JSON.stringify({ fname, lname, phone, address, dob })
        });

    }
    // end edit profile section


    return (
        <ProfileContext.Provider value={{ data, udata, Profile, editProfile }}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default UserState;