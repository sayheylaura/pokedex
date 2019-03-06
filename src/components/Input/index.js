import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      labelContent,
      inputType,
      inputName,
      inputValue,
      example,
      handleInputChange
    } = this.props;
    return (
      <label className="input__label" htmlFor={inputName}>
        {labelContent}
        <input
          className="input__field"
          type={inputType}
          name={inputName}
          id={inputName}
          placeholder={example}
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelContent: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default Input;