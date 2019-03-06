import React, { Component } from 'react';

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

export default Input;