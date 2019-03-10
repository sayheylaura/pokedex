import React from 'react';
import PropTypes from 'prop-types';
import './Circle.scss';

const Circle = ({ styles }) => <div className={styles}></div>

Circle.propTypes = {
  styles: PropTypes.string.isRequired
}

export default Circle;