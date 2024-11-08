import React,{useState} from "react";

function Counter() {
    let [counter, setCounter] = useState(0)

    const decrementCounter = () => {
        setCounter(c => c - 1);
    }

    const resetCounter = () => {
        setCounter(0)
    }

    const incrementCounter = () => {
        setCounter(c => c + 1)
    }

    return(
        <div className="counter-container">
            <h1 className="counterName">{counter}</h1>
            <button className="button" onClick={decrementCounter}>Decrement</button>
            <button className="button" onClick={resetCounter}>Reset</button>
            <button className="button" onClick={incrementCounter}>Increment</button>
        </div>
    );
}
export default Counter;