import React from "react";

const Search = ({ searchTerm, setSearchTerm, onSearch }) => {

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      onSearch(); 
    }
  };

  return (
    <section className="search">

      <form className="search__form" onSubmit={(e) => e.preventDefault()}> {}
        <fieldset className="search__name">
          <input 
            type="text" 
            name="form-question" 
            className="search__form-input"
            placeholder="Название сервиса" 
            required 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            onKeyPress={handleKeyPress} 
            minLength="1" 
            maxLength="500" 
            id="name"
          />
          <span className="search__input-error" id="name-error"></span>
        </fieldset>

        <button 
          className="search__add-button" 
          type="button" 
          onClick={onSearch} 
          >Поиск</button>
      </form>

    </section>
  );
};

export default Search;
