import React from "react";
import styles from "./FancyHeader.module.scss";

const FancyHeader = () => {
  return (
    <h2>
      <span className={styles.blue}>Find</span>
      <span className={styles.red}>a</span>
      <span className={styles.yellow}>Fancy</span>
      <span className={styles.green}>Book!</span>
    </h2>
  );
};

export default FancyHeader;
