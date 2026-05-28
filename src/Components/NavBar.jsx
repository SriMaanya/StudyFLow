import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const NavBar = ({sideBarOpen, setSideBarOpen, input, SetInput }) => {

    // const [name, setName] = useState('Sri');

    let date = new Date();
    let currentDate = date.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const handleNameChange = () => {
        const updateInput = document.querySelector('.user-name').value;
        if(updateInput !== '')
            SetInput(updateInput);
        else
            SetInput('User');
    };

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <button className="toggle-menu"
                            onClick={() => setSideBarOpen(!sideBarOpen)}>
                        <FontAwesomeIcon icon={faBars} className="menu-icon"/>
                    </button>
                    <div className="user-greetings">
                        <h2 className='greetings'>Hello, <span>{input}</span></h2>
                        <p className='current-date'>{currentDate}</p>
                    </div>
                </div>
                <div className="navbar-right">
                    <input type='text' value={input} className='user-name' onChange={handleNameChange}/>
                </div>
            </div>
        </>
    );
}
 
export default NavBar;