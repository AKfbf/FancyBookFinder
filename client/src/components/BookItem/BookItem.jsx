import React, { useEffect, useRef } from "react";
import styles from "./BookItem.module.scss";
import questionMark from "../../assets/images/questionMark.jpg";
import shortenText from "../../tools/TextShortener";

const BookItem = props => {
  const bookItemRef = useRef();

  useEffect(() => {
    if (bookItemRef.current) {
      let height = bookItemRef.current.offsetHeight;
      props.setItemHeight(height);
    }
  }, [bookItemRef]);

  return (
    <div key={props.itemKey}>
      {props.itemData && (
        <div
          data-testid={"book-item"}
          className={styles.container}
          ref={bookItemRef}
        >
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

export default BookItem;
