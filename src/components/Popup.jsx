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
                        placeholder="Название сервиса"
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
                        placeholder="Пароль"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        min="4"
                        max="20"
                    />
                </label>

                <h2 className='popup__form-title'>Сгенерировать пароль?</h2>

                <div className='popup__form-generator'>

                    <label className='popup__form-label'>
                        Длина пароля 
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
                        Включать цифры 
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                        />
                    </label>

                    <label className='popup__form-label'>
                        Включать символы 
                        <input
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={() => setIncludeSymbols(!includeSymbols)}
                        />
                    </label>

                    <button onClick={generatePassword}
                            className='popup__generate-button'
                            type='button'
                            >Сгенерировать</button>
                </div>

                <button className="popup__save-button" 
                        type="submit"
                        >Сохранить</button>
            </form>
        </div>
    );
};

export default Popup;
