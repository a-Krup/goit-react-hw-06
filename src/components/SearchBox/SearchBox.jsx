import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.searchBoxWrapper}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        className={styles.searchInput}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder=""
      />
    </div>
  );
};

export default SearchBox;
