import React from 'react';

const Searchbar = ({ state, handleChange }) => {
  return (
    <header className="searchbar">
      <form className="searchForm">
        <button type="submit" className="searchFormButton">
          <span className="buttonLabel">Search</span>
        </button>

        <input
          className="searchFormInput"
          type="text"
          name="serchValue"
          value={state.serchValue}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
