import { useRef, useState } from "react";
// You can read or write refs from event handlers or effects instead.
function StopWatch() {
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervalRef = useRef(null);

    const handleStart = () => {
        setStartTime(Date.now())
        setNow(Date.now())

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }

    const handleStop = () => {
        clearInterval(intervalRef.current)
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <h3>StopWatch</h3>
            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </>
    );
}

export default StopWatch;