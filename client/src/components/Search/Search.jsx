import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";
import BooksApi from "../../services/BooksApi";
import generateQuery from "./QueryGenerator";
import FormField from "../FormField/FormField";

const Search = props => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [publisher, setPublisher] = useState("");
  const [advancedSearch, setAdvancedSearch] = useState(false);

  useEffect(() => {
    if (props.apiCallCounter > 0) {
      fetchAdditionalData(
        { title, author, language, publisher },
        6,
        6 * props.apiCallCounter - 1,
        props
      );
    }
  }, [props.apiCallCounter]);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <form
          onSubmit={e => e.preventDefault()}
          onKeyPress={e => {
            if (e.charCode === 13) return e.preventDefault();
          }}
        >
          <FormField label={"Title"} setter={setTitle} type={"text"} />
          {!advancedSearch && (
            <FormField
              label={"Advanced Search"}
              setter={setAdvancedSearch}
              type={"checkbox"}
              value={advancedSearch}
            />
          )}
          {advancedSearch &&
            renderAdvancedSearch({
              setAuthor,
              setLanguage,
              setPublisher,
              language
            })}
          <button
            data-testid={"search-button"}
            onClick={e =>
              searchHandler({ title, author, language, publisher }, props, e)
            }
          >
            Search&#x1F50D;
          </button>
        </form>
      </div>
    </div>
  );
};

const renderAdvancedSearch = state => {
  return [
    <FormField
      key={"Author"}
      label={"Author"}
      setter={state.setAuthor}
      type={"text"}
    />,
    <FormField
      key={"Language"}
      label={"Language"}
      setter={state.setLanguage}
      value={state.language}
      options={["", "PL", "ENG"]}
      type={"select"}
    />,
    <FormField
      key={"Publisher"}
      label={"Publisher"}
      setter={state.setPublisher}
      type={"text"}
    />
  ];
};

const searchHandler = (searchOptions, props, event) => {
  event.preventDefault();
  fetchInitialData(searchOptions, 6, 0, props);
};

const fetchInitialData = async (
  searchOptions,
  queryAmount,
  queryIndex,
  props
) => {
  const query = generateQuery(searchOptions, queryAmount, queryIndex);
  const response = await BooksApi.get(query);
  props.updateBooksData(response.data.items);
  props.setApiCallCounter(0);
};

const fetchAdditionalData = async (
  searchOptions,
  queryAmount,
  queryIndex,
  props
) => {
  let query = generateQuery(
    {
      title: searchOptions.title,
      author: searchOptions.author,
      language: searchOptions.language,
      publisher: searchOptions.publisher
    },
    queryAmount,
    queryIndex
  );
  const response = await BooksApi.get(query);
  response.data.items &&
    response.data.items.forEach(item => {
      props.updateBooksData(arr => [...arr, item]);
    });
};

export default Search;
