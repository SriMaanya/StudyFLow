import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faHouse,
    faHourglassHalf,
    faListCheck,
    faBook,
    faFaceSmileBeam,
    faGear,
    faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
const SideBar = ({page, setPage, sideBarOpen, setSideBarOpen}) => {
    return (
        <>
            <div className={
                sideBarOpen 
                ? 'main-container open'
                : 'main-container closed'}
            >
                <div className="SideBar-top-part">
                    <div className="title-logo-part">
                        <button className="sideBar-logo">SF</button>
                        <p className="sideBar-title">StudyFlow</p>
                    </div>

                    <div className="sidebar-toggle">
                        <button className="toggle"
                        onClick={() => 
                            setSideBarOpen(!sideBarOpen)
                        }
                        ><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                </div>

                <div className="sidebar-nav">

                    <button className={ `sidebar-icons ${page === 'dashboard' ? 'active' : '' } `}
                            onClick={() => setPage('dashboard')}>
                        <FontAwesomeIcon icon={faHouse} className="icons" />
                        <span>Dashboard</span>
                    </button>

                    <button className={ `sidebar-icons ${page === 'pomodoro' ? 'active' : '' } `}
                            onClick={() => setPage('pomodoro')}>
                        <FontAwesomeIcon icon={faHourglassHalf} className="icons" />
                        <span>Pomodoro</span>
                    </button>

                    <button className={ `sidebar-icons ${page === 'tasks' ? 'active' : '' } `}
                            onClick={() => setPage('tasks')}>
                        <FontAwesomeIcon icon={faListCheck} className="icons" />
                        <span>Tasks</span>
                    </button>

                    <button className={ `sidebar-icons ${page === 'notes' ? 'active' : '' } `}
                            onClick={() => setPage('notes')}>
                        <FontAwesomeIcon icon={faBook} className="icons" />
                        <span>Notes</span>
                    </button>

                    <button className={`sidebar-icons ${page === 'mood' ? 'active' : '' } `}
                            onClick={() => setPage('mood')}>
                        <FontAwesomeIcon icon={faFaceSmileBeam} className="icons" />
                        <span>Mood</span>
                    </button>

                    <button className={`sidebar-icons ${page === 'settings' ? 'active' : '' }`}
                            onClick={() => setPage('settings')}>
                        <FontAwesomeIcon icon={faGear} className="icons" />
                        <span>Settings</span>
                    </button>
                </div>

                <div className="logout">
                    <button className="logout-btn">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-icon" />
                        <span>Logout</span>
                    </button>                    
                </div>

            </div>
        </>
    );
}
 
export default SideBar;