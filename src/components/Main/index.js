import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';

class Main extends Component {
  render() {
    const { pokemonName, pokemonData, filterPokemons } = this.props;
    return (
      <main className="app__main">
        <Filter pokemonName={pokemonName} filterPokemons={filterPokemons} />

        <ul className="pokemon__list">
          {!!pokemonData && !!pokemonData.length && pokemonData.map(pokemon => {
            return (
              <li key={pokemon.id}>
                {pokemon.name}
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

Main.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokemonData: PropTypes.array.isRequired,
  filterPokemons: PropTypes.func.isRequired
}

export default Main;