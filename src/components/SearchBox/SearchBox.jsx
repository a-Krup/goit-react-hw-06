import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.searchBoxWrapper}>
      <label htmlFor="search" className={styles.label}>
        Search Contacts
      </label>
      <input
        type="text"
        id="search"
        className={styles.searchInput}
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
