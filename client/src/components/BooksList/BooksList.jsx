import React from "react";
import BookItem from "../BookItem/BookItem";
import styles from "./BooksList.module.scss";

const BooksList = props => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {props.booksData &&
          props.booksData.map(data => {
            return <BookItem itemData={data.volumeInfo} key={data.id} />;
          })}
      </div>
    </div>
  );
};

export default BooksList;
