import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonList from '../PokemonList';
import Loader from '../Loader';
import NoData from '../NoData';

class Main extends Component {
  render() {
    const { pokemonData, isFetching } = this.props;
    return (
      <main className="app__main">
        {isFetching ? (
          <Loader />
        ) : ((pokemonData.length === 0)) ? (
          <NoData />
        ) : (
              <PokemonList pokemonData={pokemonData} />
            )}
      </main>
    );
  }
}

Main.propTypes = {
  pokemonData: PropTypes.array.isRequired,
}

export default Main;