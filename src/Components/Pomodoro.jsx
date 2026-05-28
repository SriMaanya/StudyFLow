import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faPause
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Pomodoro = () => {

    const totalTime = 25 * 60;

    const [secondsLeft, setSecondsLeft] = useState(totalTime);
    const [isRunning, setIsRunning] = useState(false);

    // Timer Logic
    useEffect(() => {

        let timer;

        if( isRunning && secondsLeft > 0){

            timer = setInterval(() => {
                setSecondsLeft(prev => prev - 1);
            }, 1000);
        }

        return () => clearInterval(timer);

    }, [isRunning, secondsLeft]);

    // Format TIme
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // PROGRESS
    const progress = ((totalTime - secondsLeft) / totalTime) * 100;

    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress/100) * circumference;

    // BUTTON FUNCTIONS
    const handleStart = () => {
        setIsRunning(true);
        setDanger(true);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSecondsLeft(totalTime);
    };

    // Button 
    const [danger, setDanger] = useState(false);

    return (
        <>
            <div className="pomodoro-page-container">
                <div className="pomodoro-container_in">
                    <h2 className="pomo-title-page">Pomodoro Timer</h2>

                    <div className="pie-chart-container_in">
                        <div className="pie-chart_in">

                            <svg width="220" height="220">

                                {/* BackGround Circle */}
                                <circle
                                    cx="110"
                                    cy="110"
                                    r={radius}
                                    className="chart-bg-pomo"
                                    fill='transparent'
                                />

                                {/* Progress Circle */}
                                <circle
                                    cx="110"
                                    cy="110"
                                    r={radius}
                                    className="chart-progress-pomo"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={offset}
                                    fill='transparent'
                                />
                            </svg>

                            <h1 className="clock-time_pomo">{formattedTime}</h1>
                        </div>

                    </div>

                    <div className="timer-display-pomo">                        
                        <h2>5/12 Pomodoros</h2>
                        <p>Sessions Completed Today</p>
                    </div>

                    <div className="timer-controls">

                        {
                            isRunning ? (

                                <button
                                    className="start-btn-pomo danger"
                                    onClick={() => setIsRunning(false)}
                                >
                                    <FontAwesomeIcon icon={faPause} />
                                    <span>Pause</span>
                                </button>

                            ) : (

                                <button
                                    className="start-btn-pomo"
                                    onClick={handleStart}
                                >
                                    <FontAwesomeIcon icon={faPlay} />
                                    <span>Start</span>
                                </button>

                            )
                        }

                        <button className='reset-btn-pomo' onClick={handleReset}>
                            <span>Reset</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Pomodoro;