import React from "react";
import styles from "./BookItem.module.scss";

const BookItem = props => {
  return (
    <div className={styles.container}>
      <img
        src={props.itemData.imageLinks.thumbnail}
        alt={props.itemData.title}
      />
      <div>
        <h4>{props.itemData.title}</h4>
        <p>{shortenText(props.itemData.description)}</p>
      </div>
    </div>
  );
};

const shortenText = text => {
  return (text && text.split(/[.|!|?]\s/)[0]) || "Description not found";
};

export default BookItem;
