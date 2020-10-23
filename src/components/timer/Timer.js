import React, { useState, useEffect, memo } from 'react';

const Timer = ({ startingFrom, timerFunction, label }) => {
    const [seconds, setSeconds] = useState(startingFrom || 60);

    useEffect(() => {
        const id = setInterval(() => {
             setSeconds(seconds => { 
                    const isTimerDone = (seconds - 1) === 0;
                    // if (isTimerDone) timerFunction(); 
                    return isTimerDone ? startingFrom : seconds - 1;
                }
            );
        }, 1000);
        return () => window.clearInterval(id);
    }, [startingFrom, timerFunction]);

    const displayTimer = new Date(seconds * 1000).toISOString().substr(14, 5);

    return (
        <div>{label}{displayTimer}</div>
    );
}

export const MemoTimer = memo(Timer);