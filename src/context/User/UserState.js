import userContext from "./userContext";

const Teams = (props) => {

    return (
        <userContext.Provider value={{  }}>
            {props.children}
        </userContext.Provider>
    )
}

export default Teams;