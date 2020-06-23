import React from "react";
import { string, func } from "prop-types";
import styles from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ webformatURL, largeImageURL, showModal }) {
  return (
    <li className={styles.item}>
      <img
        src={webformatURL}
        alt="img"
        className={styles.image}
        width="640"
        height="360"
        onClick={() => showModal(largeImageURL)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: string.isRequired,
  largeImageURL: string.isRequired,
  showModal: func.isRequired,
};

export default ImageGalleryItem;
