import React, { Component } from "react";
import { func, string } from "prop-types";
import styles from "./Modal.module.css";

class Modal extends Component {
  static propTypes = {
    onClose: func.isRequired,
    largeImageURL: string.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img src={largeImageURL} alt="" width="1280" height="860" />
        </div>
      </div>
    );
  }
}
export default Modal;
