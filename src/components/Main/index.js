import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';

class Main extends Component {
  render() {
    const { pokemonName, filterPokemons } = this.props;
    return (
      <main className="app__main">
        <Filter pokemonName={pokemonName} filterPokemons={filterPokemons} />
      </main>
    );
  }
}

Main.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  filterPokemons: PropTypes.func.isRequired
}

export default Main;