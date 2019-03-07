import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';

class Main extends Component {
  render() {
    const { pokemonName, pokemonData, saveUserQuery } = this.props;
    return (
      <main className="app__main">
        <Filter pokemonName={pokemonName} saveUserQuery={saveUserQuery} />

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
  saveUserQuery: PropTypes.func.isRequired
}

export default Main;