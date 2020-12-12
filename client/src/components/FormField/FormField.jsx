import React from "react";
import styles from "./FormField.module.scss";

const FormField = props => {
  const fields = {
    text: (
      <div className={styles.fieldContainer}>
        <label htmlFor="">{props.label}</label>
        <input
          type="text"
          onChange={e => props.setter(e.currentTarget.value)}
        />
      </div>
    ),
    select: (
      <div className={styles.fieldContainer}>
        <label htmlFor="">{props.label}</label>
        <select
          onChange={e => props.setter(e.currentTarget.value)}
          defaultValue=""
        >
          {props.options &&
            props.options.map((option, index) => {
              return (
                <option value={option.toLowerCase()} key={option + index}>
                  {option}
                </option>
              );
            })}
        </select>
      </div>
    ),
    date: (
      <div className={styles.fieldContainer}>
        <label htmlFor="">{props.label}</label>
        <input
          type="date"
          onChange={e => props.setter(e.currentTarget.value)}
        />
      </div>
    ),
    checkbox: (
      <div className={styles.fieldContainer}>
        <label htmlFor="">{props.label}</label>
        <input
          type="checkbox"
          onChange={e => props.setter(e.currentTarget.value)}
        />
      </div>
    )
  };
  return <div>{props.type && fields[props.type]}</div> || <div></div>;
};

export default FormField;
