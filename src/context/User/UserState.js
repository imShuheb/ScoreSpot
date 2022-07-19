import userContext from "./userContext";

const Teams = (props) => {
    let name = "shuheb"

    return (
        <userContext.Provider value={{ name }}>
            {props.children}
        </userContext.Provider>
    )
}

export default Teams;