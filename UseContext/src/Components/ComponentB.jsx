import ComponentC from "./ComponentC"

const ComponentB = () => {
    return(
        <div className="container">
            From B
            <ComponentC/>
        </div>
    )
}

export default ComponentB