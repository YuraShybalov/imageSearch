import React from 'react';

const Searchbar = () => {
  return (
    <header className="searchbar">
      <form className="searchForm">
        <button type="submit" className="searchFormButton">
          <span className="buttonLabel">Search</span>
        </button>

        <input
          className="searchFormInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
