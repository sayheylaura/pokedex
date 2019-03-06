import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

class Filter extends Component {
  render() {
    const { pokemonName, filterPokemons } = this.props;
    return (
      <section className="app__filter">
        <Input
          labelContent="Filter pokemons by name"
          inputType="text"
          inputName="pokemonName"
          inputValue={pokemonName}
          example="Ex: Pikachu"
          handleInputChange={filterPokemons}
        />
      </section>
    );
  }
}

Filter.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  filterPokemons: PropTypes.func.isRequired
}

export default Filter;