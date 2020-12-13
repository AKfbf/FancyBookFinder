import React, { useEffect, useRef } from "react";
import styles from "./BookItem.module.scss";
import questionMark from "../../assets/images/questionMark.jpg";

const BookItem = props => {
  const bookItemRef = useRef();

  useEffect(() => {
    if (bookItemRef.current) {
      let height = bookItemRef.current.offsetHeight;
      props.setItemHeight(height);
    }
  }, [bookItemRef]);

  return (
    <div key={props.key}>
      {props.itemData && (
        <div className={styles.container} ref={bookItemRef}>
          <img
            className={styles.bookCover}
            src={
              (props.itemData.imageLinks &&
                props.itemData.imageLinks.smallThumbnail) ||
              questionMark
            }
            alt={props.itemData.title}
          />
          <div className={styles.textContainer}>
            <h4>{shortenText(props.itemData.title, 150)}</h4>
            <p>{shortenText(props.itemData.description, 150)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const shortenText = (text, length) => {
  let splittedText = text && text.split(/[.|!|?]\s/)[0];

  if (splittedText && splittedText.length > length) {
    splittedText = splittedText.substr(0, length - 1) + " ...";
  }

  return (splittedText && splittedText) || "Description not found";
};

export default BookItem;
