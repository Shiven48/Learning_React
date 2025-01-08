import { useContext } from "react"
import { userContext } from "./ComponentA"

const ComponentD = () => {
    const username = useContext(userContext)
    return(
        <div className="container">
            Bye {username}
        </div>
    )
}

export default ComponentD