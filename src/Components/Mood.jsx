const Mood = ({moods,selectedMood,setSelectedMood}) => {
    return (
        <>
            <div className="mood-container">
                <div className="mood-section">
                    <h2 className="mood-title">How are you feeling?</h2>
                    
                    <div className="feelings">
                        {
                            moods.map((mood, index) => (
                                <div key={index} 
                                     className={
                                        selectedMood.name === mood.name ? 'emoji-container active' : 'emoji-container'
                                     }
                                     onClick={() => setSelectedMood(mood)}
                                >
                                    <div className="mood-emoji">{mood.emoji}</div>
                                    <div className="mood name">{mood.name}</div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="emoji-desc">
                        <h2>
                            You're feeling
                            {' '}
                            <span>{selectedMood.name}</span>
                            {' '}
                            today!
                        </h2>
                        <p>
                            {selectedMood.message}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Mood;