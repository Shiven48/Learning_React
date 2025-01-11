import { useEffect, useRef, useState } from "react"; 

const Ref = () => { 

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const IntervalIdRef = useRef(null);
    const StartTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning) {
            IntervalIdRef.current = setInterval( () => {
                setElapsedTime(Date.now() - StartTimeRef.current)
            },10);
        }

        return () => {
            clearInterval(IntervalIdRef.current)
        } 

    },[isRunning]); 

    const StartWatch = () => {
       setIsRunning(true)
       StartTimeRef.current = Date.now() - elapsedTime;
    }

    const StopWatch = () => {
        setIsRunning(false)
    }

    const RestartWatch = () => {
        setElapsedTime(0)
        setIsRunning(false)
    }

    const formatTime = () => {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let milliseconds = Math.floor((elapsedTime % 1000) / 10)

        hours = String(hours).padStart(2,"0")
        minutes = String(minutes).padStart(2,"0")
        seconds = String(seconds).padStart(2,"0")
        milliseconds = String(milliseconds).padStart(2,"0")

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return(
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
                <div className="controls">
                    <button className="start_button" onClick={StartWatch}>Start Timer</button>
                    <button className="stop_button" onClick={StopWatch}>Stop Timer</button>
                    <button className="restart_button" onClick={RestartWatch}>Reset Timer</button>
                </div>
            </div>
        </div>
    );
}

export default Ref