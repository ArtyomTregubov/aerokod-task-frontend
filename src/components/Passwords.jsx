import React from "react";

export default function Passwords({passwordCards, onDeleteCard}) {

  const handleCopyPassword = (password) => {
    navigator.clipboard.writeText(password) 
      .then(() => {
        alert('Пароль скопирован в буфер обмена!'); 
      })
      .catch(err => {
        console.error('Ошибка при копировании пароля: ', err); 
      });
  };

  return (
    <section className="passwords">

      <div className="passwords__container">
        <h2 className="passwords__title">Saved passwords :</h2>
        <div className="passwords__grid">

          {
            passwordCards.map((card) => {

              return (
                <article className="passwords__element" key={card.id}>
                  <span className="passwords__name">{card.name}</span>
                  <span className="passwords__password">{card.password}</span>
                  <div className="passwords__buttons">

                    <button 
                      className="passwords__copy-button" 
                      onClick={() => handleCopyPassword(card.password)} 
                    ></button>

                    <button 
                      className="passwords__delete-button" 
                      onClick={() => onDeleteCard(card.id)} 
                    ></button>
                    
                  </div>
                </article>
              );
              
            })
          }
        </div>
      </div> 

      <img src="./images/password_image.png" 
           alt="картинка пароля" 
           className="passwords__image"/>

    </section>
  );
}
