const Popup = ({ isOpen,    
                onClose, 
                password, 
                setPassword, 
                length, 
                setLength,
                includeNumbers, 
                setIncludeNumbers,
                includeSymbols,
                setIncludeSymbols,
                generatePassword,  
                serviceName, 
                setServiceName, 
                addPasswordCard }) => {
   

    const handleSubmit = (e) => {
        e.preventDefault(); 
        addPasswordCard(); 
    };

    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__button-container">
                <button className="popup__close-button" onClick={onClose}></button>
            </div>

            <form className='popup__form' onSubmit={handleSubmit}>

                <label>
                    <input
                        className='popup__input-name'
                        placeholder="Service name"
                        type="text"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        min="4"
                        max="20"
                    />
                </label>

                <label>
                    <input
                        className='popup__input-name'
                        placeholder="Password"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        min="4"
                        max="20"
                    />
                </label>

                <h2 className='popup__form-title'>Generate password?</h2>

                <div className='popup__form-generator'>

                    <label className='popup__form-label'>
                        Password length 
                        <input
                            className='popup__input-number'
                            type="number"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            min="4"
                            max="20"
                        />
                    </label>

                    <label className='popup__form-label'>
                        Include numbers 
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                        />
                    </label>

                    <label className='popup__form-label'>
                        Include symbols 
                        <input
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={() => setIncludeSymbols(!includeSymbols)}
                        />
                    </label>

                    <button onClick={generatePassword}
                            className='popup__generate-button'
                            type='button'
                            >Generate</button>
                </div>

                <button className="popup__save-button" 
                        type="submit"
                        >Save</button>
            </form>
        </div>
    );
};

export default Popup;
