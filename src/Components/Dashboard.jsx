import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faTrashCan,
    faPause
} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';

const Dashboard = ({tasks, setTasks, selectedMood, sideBarOpen}) => {

    /*  =====================
            POMODORO
        =====================
    */
    
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
    
        const radius = 60;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress/100) * circumference;
    
        // BUTTON FUNCTIONS
        const handleStart = () => {
            setIsRunning(true);
        };
    
        const handleReset = () => {
            setIsRunning(false);
            setSecondsLeft(totalTime);
        };


    /*  =====================
            TASKS 
        =====================
    */

    // const [tasks, setTasks] = useState([
    //     { text : 'Eating', completed: true},
    //     { text : 'Study Algorithms', completed: false},
    //     { text : 'Complete React Project', completed: true},
    //     { text : 'Operating Systems', completed: false}
    // ]);

    const handleAddTasks = () =>{
        const newTask = document.querySelector('.value-text').value;
        if(newTask!=''){
            document.querySelector('.value-text').value = '';
            setTasks([...tasks,{text: newTask, completed: false}]);
        }
    };

    const handleDeleteTask = (index) =>{
        const updateTask = tasks.filter( (_,i) => i !== index);
        setTasks(updateTask);
    }

    const handleTaskComplete = (index) =>{

        const updateTask = [...tasks];

        updateTask[index].completed = !updateTask[index].completed;

        setTasks(updateTask);
    };

    // COMPLETED TASKS
    const completedTasks = tasks.filter( (task) => task.completed).length;

    const totalTasks = tasks.length;


    return (
        <>
            <div className="main-container-dashboard ">
                <div className='main-content'>
                    {/* Stats Container */}
                    <div className="stats-card">
                        <div className="stats tasks">
                            <p>Tasks</p>
                            <span>{completedTasks} / {totalTasks}</span>
                        </div>
                        <div className="stats focus-hours">
                            <p>Focus Hours</p>
                            <span>5.5h</span>
                        </div>
                        <div className="stats mood">
                            <p>Mood</p>
                            <span>{selectedMood.emoji}</span>
                        </div>
                        <div className="stats streak">
                            <p>Streak</p>
                            <span>12d</span>
                        </div>
                    </div>
                </div> 

                <div className="middle-section">
                    <div className="card">
                        <div className="pomo-card">
                        {/* POMODORO CONTAINER */}
                            <div className="pomodoro-container">
                                <h2 className="pomo-title">Pomodoro Timer</h2>

                                <div className="pie-chart-container">
                                    <div className="pie-chart">
                                        <svg width="140" height="140 ">

                                            {/* BackGround Circle */}
                                            <circle
                                                cx="70"
                                                cy="70"
                                                r={radius}
                                                className="chart-bg"
                                                fill="transparent"
                                            />

                                            {/* Progress Circle */}
                                            <circle
                                                cx="70"
                                                cy="70"
                                                r={radius}
                                                className="chart-progress"
                                                strokeDasharray={circumference}
                                                strokeDashoffset={offset}
                                                fill="transparent"
                                            />
                                        </svg>
                                        <div className="chart-text">
                                            <h2>5</h2>
                                            <p>of 12</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="timer-display">
                                    <h1 className="clock-time">{formattedTime}</h1>
                                    <p>Focus Session</p>
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
                                    <button className='reset-btn' onClick={handleReset}>
                                        <span>Reset</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="tasks">
                            {/* TASKS CONTAINER */}
                            <div className="tasks-container">
                                <h2 className="tasks-title">Daily Tasks</h2>
                                <div className="tasks-list">
                                    <div className="tasks-list-items">
                                        <ul>
                                            {
                                                tasks.map( (task, index) => 
                                                    <li key={index} className={task.completed ? 'completed' : ''}>
                                                        <div className="list-dash">
                                                            <input  type="checkbox"
                                                                checked={task.completed}
                                                                onChange={() => handleTaskComplete(index)}
                                                            /><span>{task.text}</span>
                                                        </div>
                                                        <div className="delete-bin" onClick={() => handleDeleteTask(index)}><FontAwesomeIcon icon={faTrashCan} /></div>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>    
                                    <div className="task-input">
                                        <input type="text" className="value-text" placeholder='Add a new task...' />
                                        <button onClick={handleAddTasks}>Add</button>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        </>
    );
}
 
export default Dashboard;