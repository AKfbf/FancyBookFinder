import React from "react";
import styles from "./FormField.module.scss";

const FormField = props => {
  const fields = {
    text: (
      <div
        className={styles.fieldContainer}
        key={props.label + new Date().toString}
      >
        <label htmlFor="">{props.label}</label>
        <input
          type="text"
          onChange={e => props.setter(e.currentTarget.value)}
        />
      </div>
    ),
    select: (
      <div
        className={styles.fieldContainer}
        key={props.label + new Date().toString}
      >
        <label htmlFor="">{props.label}</label>
        <select
          value={props.value}
          onChange={e => props.setter(e.currentTarget.value)}
          defaultValue=""
        >
          {props.options &&
            props.options.map(option => {
              return (
                <option value={option.toLowerCase()} id={option}>
                  {option}
                </option>
              );
            })}
        </select>
      </div>
    ),
    date: (
      <div
        className={styles.fieldContainer}
        key={props.label + new Date().toString}
      >
        <label htmlFor="">{props.label}</label>
        <input
          type="date"
          onChange={e => props.setter(e.currentTarget.value)}
        />
      </div>
    ),
    checkbox: (
      <div
        className={styles.fieldContainer}
        key={props.label + new Date().toString}
      >
        <label htmlFor="">{props.label}</label>
        <input
          type="checkbox"
          onChange={e => props.setter(e.currentTarget.value)}
        />
      </div>
    )
  };
  return (props.type && fields[props.type]) || <div></div>;
};

export default FormField;
