import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './Filter.scss';

class Filter extends Component {
  render() {
    const { pokemonName, saveUserQuery } = this.props;
    return (
      <section className="app__filter">
        <Input
          labelContent="Filter Pokémons by name"
          inputType="text"
          inputName="pokemonName"
          inputValue={pokemonName}
          example="Ex: Pikachu"
          handleInputChange={saveUserQuery}
        />
      </section>
    );
  }
}

Filter.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  saveUserQuery: PropTypes.func.isRequired
}

export default Filter;