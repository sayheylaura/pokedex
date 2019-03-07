import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonList extends Component {
  render() {
    const { pokemonData } = this.props;
    return (
      <ul className="pokemon__list">
        {pokemonData.map(pokemon => {
          return (
            <li key={pokemon.id}>
              {pokemon.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

PokemonList.propTypes = {
  pokemonData: PropTypes.array.isRequired
}

export default PokemonList;