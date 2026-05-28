import { useState } from "react";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Dashboard";
import Pomodoro from "./Components/Pomodoro";
import Tasks from "./Components/Tasks";
import Notes from "./Components/Notes";
import Mood from "./Components/Mood";
import Settings from "./Components/Settings";
const App = () => {

    const[page, setPage] = useState('dashboard');

    const [sideBarOpen, setSideBarOpen] = useState(true);

    const [tasks, setTasks] = useState([
        { text : 'Eating', completed: true},
        { text : 'Study Algorithms', completed: false},
        { text : 'Complete React Project', completed: true},
        { text : 'Operating Systems', completed: false}
    ]);

    const moods = [
        {
            emoji: '😴',
            name: 'Tired',
            message: 'Take some rest Today!'
        },
        {
            emoji: '😐',
            name: 'Neutral',
            message: 'Stay balanced and calm!'
        },
        {
            emoji: '😊',
            name: 'Happy',
            message: 'Keep smiling today!'
        },
        {
            emoji: '🤩',
            name: 'Focused',
            message: 'Deep work mode activated!'
        },
        {
            emoji: '🔥',
            name: 'Productive',
            message: 'Keep up the great work! 🚀'
        },
        {
            emoji: '😓',
            name: 'Stressed',
            message: 'Take it one step at a time 💙'
        },
    ]

    const [selectedMood, setSelectedMood] = useState(moods[2]);

    const [input, SetInput] = useState('Sri')

    return (
        <>
            <div className={
                    sideBarOpen
                        ? 'app sidebar-open'
                        : 'app sidebar-closed'}
            >
                <SideBar page={page} setPage={setPage}
                         sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>

                <div className="main">
                    
                    <NavBar sideBarOpen={sideBarOpen} 
                            setSideBarOpen={setSideBarOpen}
                            input={input}
                            SetInput={SetInput}        
                    />

                    <div className="scroll-section">

                        {page === 'dashboard' && <Dashboard tasks={tasks} setTasks={setTasks}
                                                            selectedMood={selectedMood}
                                                            sideBarOpen={sideBarOpen}
                        />}

                        {page === 'pomodoro' && <Pomodoro/>}

                        {page === 'tasks' && <Tasks tasks={tasks} 
                                                    setTasks={setTasks}
                        />}  
                        
                        {page === 'notes' && <Notes />}

                        {page === 'mood' && <Mood   moods={moods} 
                                                    selectedMood={selectedMood} 
                                                    setSelectedMood={setSelectedMood}
                        />}

                        {page === 'settings' && <Settings   input={input}
                                                            SetInput={SetInput} 
                        />}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default App;