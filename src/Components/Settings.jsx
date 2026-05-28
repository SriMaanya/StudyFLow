
const Settings = ({input, SetInput}) => {

    const handleUpdateInput = () => {
        const updateInput = document.querySelector('.input').value;
            if(updateInput !== '')
                SetInput(updateInput);
            else
                SetInput('User');
    };

    return (
        <>
            <div className="settings-container">
                <h1 className="settings-title">Settings</h1>

                <div className="profile">
                    <h2>Profile</h2>
                    <label>Username</label>
                    <input type="text" className='input' value={input} onChange={handleUpdateInput}></input>
                </div>

                <hr />

                <div className="notifications">
                    <h2>Notifications</h2>
                    <div className="remainders">
                        <label>
                            <input type="checkbox" />
                            <span>Pomodoro Remainders</span>
                        </label>

                        <label>
                            <input type="checkbox" />
                            <span>Task Alerts</span>
                        </label>

                        <label>
                            <input type="checkbox" />
                            <span>Daily Summary</span>
                        </label>                     
                        
                    </div>
                </div>

                <hr />

                <div className="theme">
                    <h2>Theme</h2>
                    <button className="light">Light</button>
                    <button className="dark">Dark</button>
                </div>
            </div>
        </>
    );
}
 
export default Settings;