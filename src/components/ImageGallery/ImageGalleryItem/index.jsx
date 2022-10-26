import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from 'components/ImageGallery/ImageGalleryItem/style.module.css';
import Modal from 'components/Modal';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {!!isOpen && <Modal src={largeImageURL} onClose={handleClose} />}

      <li className={styles.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt="result of search"
          className={styles.ImageGalleryItemImage}
          onClick={handleOpen}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
