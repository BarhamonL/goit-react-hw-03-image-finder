import React from "react";
import { func, arrayOf, object } from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./ImageGallery.module.css";

function ImageGallery({ hits, showModal }) {
  return (
    <ul className={styles.ImageGallery}>
      {hits.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          showModal={showModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  hits: arrayOf(object).isRequired,
  showModal: func,
};

export default ImageGallery;
