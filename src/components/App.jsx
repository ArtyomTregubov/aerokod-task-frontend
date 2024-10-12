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
        password: "123ABC"
    },

    {
        id: uuidv4(), 
        name: "Госуслуги",
        password: "1012021"
    },

    {
        id: uuidv4(), 
        name: "PornHub",
        password: "123$ABC"
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
        const newCard = { id: uuidv4(), name: serviceName, password: password }; 
        const updatedCards = [...passwordCards, newCard];

        // Имитация отправки данных на сервер
        setTimeout(() => {
            if (Math.random() < 0.5) { // 50% вероятность успешного ответа
                setPasswordCards(updatedCards); 
                setFilteredCards(updatedCards); 
                localStorage.setItem('passwordCards', JSON.stringify(updatedCards)); 
                setServiceName(''); 
                setPassword(''); 
                setIsPopupOpen(false); 
            } else {
                alert('Ошибка: не удалось добавить карточку пароля. Попробуйте еще раз.'); // Обработка ошибки
            }
        }, 1000); // Задержка 1 секунда
    };

    const deletePasswordCard = (id) => {
        // Имитация отправки данных на сервер для удаления
        setTimeout(() => {
            if (Math.random() < 0.5) { // 50% вероятность успешного ответа
                const updatedCards = passwordCards.filter(card => card.id !== id); 
                setPasswordCards(updatedCards); 
                setFilteredCards(updatedCards); 
                localStorage.setItem('passwordCards', JSON.stringify(updatedCards)); 
            } else {
                alert('Ошибка: не удалось удалить карточку пароля. Попробуйте еще раз.'); // Обработка ошибки
            }
        }, 1000); // Задержка 1 секунда
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
