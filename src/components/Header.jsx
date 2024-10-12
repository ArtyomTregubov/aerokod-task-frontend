import React from "react";

export default function Header({ onAddPassword }) {
  return (

    <header className="header">
        <div className="header__container">
           <div className="header__logo-container">
            <span className="header__logo-text">Password manager for</span>
            <img src="./images/aerokod_logo.png" alt="логотип aerокод" className="header__logo"></img>
           </div> 

           <div className="header__button-container">
            <span className="header__button-text">Add password</span>
            <button className="header__add-button" onClick={onAddPassword}>+</button>
           </div>
        </div>
    </header>
    
  );
}
