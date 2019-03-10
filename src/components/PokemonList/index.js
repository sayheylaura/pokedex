import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonCard from '../PokemonCard';
import './PokemonList.scss';

class PokemonList extends Component {
  render() {
    const { pokemonData } = this.props;
    return (
      <section className="app__pokemon">
        <ul className="pokemon__list">
          {pokemonData.map(pokemon => {
            return (
              <li key={pokemon.id} className="pokemon__item">
                <PokemonCard pokemon={pokemon} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

PokemonList.propTypes = {
  pokemonData: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired
}

export default PokemonList;