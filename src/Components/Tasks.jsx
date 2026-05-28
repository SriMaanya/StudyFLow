import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Tasks = ({tasks, setTasks}) => {

    const [input, setInput] = useState('');
    
    // ADDING TASKS
    const handleAddTasks = () =>{

        if(input.trim() !==''){
            setTasks([...tasks,{text: input, completed: false}]);
        }
        setInput('');
    };

    // UPDATING PROGRESS
    const completedTasks = tasks.filter( (task) => task.completed).length;  
    const totalTasks = tasks.length;
    const progress = totalTasks ===0 ? 0 : Math.round( (completedTasks / totalTasks) * 100);

    // HANDLING TASK COMPLETED STATUS
    const handleTaskComplete = (index) =>{

        const updateTask = [...tasks];

        updateTask[index].completed = !updateTask[index].completed;

        setTasks(updateTask);
    };

    // DELETING A TASK
    const handleDeleteTask = (index) =>{
        const updateTask = tasks.filter( (_,i) => i !== index);
        setTasks(updateTask);
    }

    return (
    <>
        <div className="tasks-section">
            <div className="tasks-card-section">
                {/* TASKS CONTAINER */}
                <div className="task-container-section">
                    <h2 className="task-hero-section">My Tasks</h2>

                    <div className="tasks-progress-section">

                        <div className="progress-top">
                            <h2>Progress</h2>
                            <span>{progress}%</span>
                        </div>

                        <div className="progress-bar">
                            <div className="progress-fill"
                                style={{width: `${progress}%`}}></div>
                        </div>                        
                    </div>

                    <div className="tasks-list-section">
                        <div className="tasks-list-items-section">
                            <ul>
                                {
                                    tasks.map( (task, index) => 
                                        <li key={index} className={task.completed ? 'completed' : ''}>
                                            <div className="list">
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
                        <div className="task-input-section">
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add a new task...' />
                            <button onClick={handleAddTasks}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
 
export default Tasks;