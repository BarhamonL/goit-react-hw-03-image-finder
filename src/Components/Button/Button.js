import React from "react";

import { func } from "prop-types";

import styles from "./Button.module.css";

export default function Button({ onClick }) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: func.isRequired,
};
