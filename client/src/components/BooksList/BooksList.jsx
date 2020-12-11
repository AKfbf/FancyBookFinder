import React from "react";
import BookItem from "../BookItem/BookItem";

const BooksList = props => {
  return (
    <div>
      {props.booksData &&
        props.booksData.map(data => {
          return <BookItem itemData={data.volumeInfo} />;
        })}
    </div>
  );
};

export default BooksList;
