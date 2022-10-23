import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem';
import styles from 'components/ImageGallery/style.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(props => (
        <ImageGalleryItem key={props.id} {...props} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
