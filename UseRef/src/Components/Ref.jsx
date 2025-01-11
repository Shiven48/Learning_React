import { useEffect, useRef, useState } from "react"; 

const Ref = () => { 

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const IntervalIdRef = useRef(null);
    const StartTimeRef = useRef(0);

    useEffect(() => {

    },[isRunning]); 

    const StartWatch = () => {
       
    }

    const StopWatch = () => {

    }

    const RestartWatch = () => {

    }

    const formatTime = () => {
        return `00:00:00`;
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