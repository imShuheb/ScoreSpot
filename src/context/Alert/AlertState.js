import { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) => {
    const [alert, setAlert] = useState();

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const name="hello"
    return (
        <AlertContext.Provider value={{showAlert,alert,name}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;