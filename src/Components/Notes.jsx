import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileLines
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Notes = () => {

    const [saved, setSaved] = useState(false);

    const handleSaveNotes = () =>{

        setSaved(true);

        setTimeout(() => {
            setSaved(false);
        },5000);
    };
    return (
        <>
            <div className="notes-container">

                <h1 className="notes-title">My Notes</h1>

                {/*  <div className="notes-textarea">*/}
                    <textarea className="notes-textarea">Focus on deep work today. Complete the React project before 6 PM.</textarea>
                {/* </div> */}

                <div className="save">
                    <button className='save-notes' onClick={handleSaveNotes}>
                        <FontAwesomeIcon icon={faFileLines} />
                        Save Notes 
                    </button>
                    <p className='savedNotes'>
                        {saved && '✓ Saved'}
                    </p>
                </div>
            </div>            
        </>
    );
}
 
export default Notes;