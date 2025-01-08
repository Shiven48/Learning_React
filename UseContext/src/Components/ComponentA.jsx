import ComponentB from "./ComponentB"
import { createContext, useState } from "react"

export const userContext = createContext(); 

const ComponentA = () => {

    const [username,setUsername] = useState("Shiven")

    return(
        <div className="container">
            hello {username}
            <userContext.Provider value={username}>
                <ComponentB/>
            </userContext.Provider>
        </div>
    )
}

export default ComponentA