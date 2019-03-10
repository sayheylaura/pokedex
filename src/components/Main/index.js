import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import PokemonList from '../PokemonList';
import Loader from '../Loader';
import Triangle from '../Triangle';
import Circle from '../Circle';

class Main extends Component {
  render() {
    const { pokemonName, pokemonData, saveUserQuery } = this.props;
    return (
      <main className="app__main">
        <Triangle styles="triangle triangle-left" />

        <Triangle styles="triangle triangle-right" />

        <Filter pokemonName={pokemonName} saveUserQuery={saveUserQuery} />

        {(!!pokemonData && !!pokemonData.length) ? (
          <PokemonList pokemonData={pokemonData} />
        ) : (
            <Loader />
          )}

        <Circle styles="circle circle-left" />

        <Circle styles="circle circle-right" />
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