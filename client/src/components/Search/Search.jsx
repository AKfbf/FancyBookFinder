import React, { useState } from "react";
import styles from "./Search.module.scss";
import BooksApi from "../../services/BooksApi";

const Search = props => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.container}>
      <h2>Search a Fancy Book!</h2>
      <div className={styles.innerContainer}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name=""
          id=""
          onChange={e => setQuery(e.currentTarget.value)}
        />
        <button onClick={e => searchHandler(query, props)}>
          Search&#x1F50D;
        </button>
      </div>
    </div>
  );
};

const searchHandler = async (query, props) => {
  const response = await BooksApi.get(query);
  props.updateBooksData(response.data.items);
};

export default Search;
