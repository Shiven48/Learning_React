import ComponentD from "./ComponentD"

const ComponentC = () => {
    return(
        <div className="container">
            From C
            <ComponentD/>
        </div>
    )
}

export default ComponentC