import React,{useState} from "react";

function Counter() {
    let [counter, setCounter] = useState(0)

    const decrementCounter = () => {
        setCounter(counter--);
    }

    const resetCounter = () => {
        setCounter(0)
    }

    const incrementCounter = () => {
        setCounter(counter++)
    }

    return(
        <div className="counter-container">
            <h1 className="counterName">{counter}</h1>
            <button className="button" onClick={decrementCounter}>Decrement:{counter}</button>
            <button className="button" onClick={resetCounter}>Reset:{counter}</button>
            <button className="button" onClick={incrementCounter}>Increment:{counter}</button>
        </div>
    );
}
export default Counter;