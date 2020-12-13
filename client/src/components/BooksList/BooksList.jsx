import React from "react";
import BookItem from "../BookItem/BookItem";
import styles from "./BooksList.module.scss";

const BooksList = props => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {(props.booksData &&
          props.booksData.map((data, index) => {
            return (
              <BookItem
                itemData={data.volumeInfo}
                itemKey={index}
                setItemHeight={props.setItemHeight}
              />
            );
          })) || <p>No records found.</p>}
      </div>
    </div>
  );
};

export default BooksList;
