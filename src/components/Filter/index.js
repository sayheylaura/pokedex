import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

class Filter extends Component {
  render() {
    const { pokemonName, filterByName } = this.props;
    return (
      <section className="app__filter">
        <Input
          labelContent="Filter pokemons by name"
          inputType="text"
          inputName="name"
          inputValue={pokemonName}
          example="Ex: Pikachu"
          handleInputChange={filterByName}
        />
      </section>
    );
  }
}

Filter.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  filterByName: PropTypes.func.isRequired
}

export default Filter;