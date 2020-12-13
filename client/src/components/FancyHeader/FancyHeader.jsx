import React from "react";
import styles from "./FancyHeader.module.scss";

const FancyHeader = () => {
  return (
    <h2 data-testid={"fancy-header"}>
      <span
        id="fancy-header-part"
        data-testid={"fancy-header-part"}
        className={styles.blue}
      >
        Find
      </span>
      <span data-testid={"fancy-header-part"} className={styles.red}>
        a
      </span>
      <span data-testid={"fancy-header-part"} className={styles.yellow}>
        Fancy
      </span>
      <span data-testid={"fancy-header-part"} className={styles.green}>
        Book!
      </span>
    </h2>
  );
};

export default FancyHeader;
