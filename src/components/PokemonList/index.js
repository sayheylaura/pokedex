import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonCard from '../PokemonCard';

class PokemonList extends Component {
  render() {
    const { pokemonData } = this.props;
    return (
      <ul className="pokemon__list">
        {pokemonData.map(pokemon => {
          return (
            <li key={pokemon.id} className="pokemon__item">
              <PokemonCard pokemon={pokemon} />
            </li>
          );
        })}
      </ul>
    );
  }
}

PokemonList.propTypes = {
  pokemonData: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired
}

export default PokemonList;