import React, { useState } from "react";
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
    <FormField label={"Author"} setter={state.setAuthor} type={"text"} />,
    <FormField
      label={"Language"}
      setter={state.setLanguage}
      value={state.language}
      options={["", "PL", "ENG"]}
      type={"select"}
    />,
    <FormField label={"Publisher"} setter={state.setPublisher} type={"text"} />
  ];
};

const searchHandler = async (searchOptions, props, event) => {
  event.preventDefault();
  const query = generateQuery(searchOptions);
  const response = await BooksApi.get(query);
  props.updateBooksData(response.data.items);
};

export default Search;
