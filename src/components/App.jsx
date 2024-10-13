import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Passwords from "./Passwords";
import Popup from "./Popup";
import { v4 as uuidv4 } from 'uuid'; 

const App = () => {

  const [passwordCards, setPasswordCards] = useState([
    {
        id: uuidv4(), 
        name: "Яндекс.Облако",
        password: "RSHDOHQM^;x|"
    },

    {
        id: uuidv4(), 
        name: "Госуслуги",
        password: "uW&65*?$ZuHN"
    },

    {
        id: uuidv4(), 
        name: "PornHub",
        password: "M}:?5x@wa_J?"
    },
    
  ]);  

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [serviceName, setServiceName] = useState(''); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [filteredCards, setFilteredCards] = useState(passwordCards); 

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const generatePassword = () => {
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

        let characters = lowerCase;
        if (includeNumbers) characters += numbers;
        if (includeSymbols) characters += symbols;
        characters += upperCase;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }

        setPassword(generatedPassword);
    };

    const loadPasswordCards = () => {
        const storedCards = JSON.parse(localStorage.getItem('passwordCards'));
        if (storedCards) {
            setPasswordCards(storedCards);
            setFilteredCards(storedCards); 
        }
    };

    const addPasswordCard = () => {
        
        if (!serviceName || !password) {
            alert('Ошибка: все поля должны быть заполнены.');
            return; 
        }

        const newCard = { id: uuidv4(), name: serviceName, password: password }; 
        const updatedCards = [...passwordCards, newCard];

        setTimeout(() => {
            if (Math.random() < 0.5) { 
                setPasswordCards(updatedCards); 
                setFilteredCards(updatedCards); 
                localStorage.setItem('passwordCards', JSON.stringify(updatedCards)); 
                setServiceName(''); 
                setPassword(''); 
                setIsPopupOpen(false); 
            } else {
                alert('Ошибка: не удалось добавить карточку пароля. Попробуйте еще раз.'); 
            }
        }, 1000); 
    };

    const deletePasswordCard = (id) => {
        
        setTimeout(() => {
            if (Math.random() < 0.5) { 
                const updatedCards = passwordCards.filter(card => card.id !== id); 
                setPasswordCards(updatedCards); 
                setFilteredCards(updatedCards); 
                localStorage.setItem('passwordCards', JSON.stringify(updatedCards)); 
            } else {
                alert('Ошибка: не удалось удалить карточку пароля. Попробуйте еще раз.'); 
            }
        }, 1000); 
    };

    const handleSearch = () => {
        const results = passwordCards.filter(card => 
            card.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCards(results); 
    };

    useEffect(() => {
        loadPasswordCards();
    }, []);

    
    const handleSave = () => {
        addPasswordCard();
    };

    return (
        <div className="App">
            <Header onAddPassword={togglePopup} />
            <main>
                <section className="homework">
                    <Search 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm} 
                        onSearch={handleSearch} 
                    />
                    <Passwords 
                        passwordCards={filteredCards} 
                        onDeleteCard={deletePasswordCard}
                    />
                    <Popup 
                        isOpen={isPopupOpen} 
                        onClose={togglePopup} 
                        password={password} 
                        setPassword={setPassword} 
                        length={length} 
                        setLength={setLength} 
                        includeNumbers={includeNumbers} 
                        setIncludeNumbers={setIncludeNumbers} 
                        includeSymbols={includeSymbols} 
                        setIncludeSymbols={setIncludeSymbols} 
                        generatePassword={generatePassword} 
                        serviceName={serviceName} 
                        setServiceName={setServiceName} 
                        addPasswordCard={addPasswordCard} 
                    />
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
