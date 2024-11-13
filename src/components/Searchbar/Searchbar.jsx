import React, {useState } from 'react';
import styles from './Searchbar.module.css';
export const Searchbar = ({onSubmit}) => {
  const [inputValue, setInputValue] = useState('');
 

  const handleSubmit = (e) => {
   e.preventDefault();
   onSubmit(inputValue);
  };

  const handleInputChange = ev => {
    setInputValue(ev.target.value);
  };


    return (
      <header className="searchbar">
        <form
          className={styles.form}
          onSubmit={ handleSubmit}
        >
          <button type="submit" className={styles.searchbutton}>
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
      </header>
    );
  }

