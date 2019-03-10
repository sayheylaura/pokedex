import React from 'react';
import PropTypes from 'prop-types';
import './Triangle.scss';

const Triangle = ({ styles }) => <div className={styles}></div>

Triangle.propTypes = {
  styles: PropTypes.string.isRequired
}

export default Triangle;