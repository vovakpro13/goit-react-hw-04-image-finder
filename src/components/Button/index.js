import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/Button/style.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
