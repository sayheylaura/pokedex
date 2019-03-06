import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';

class Main extends Component {
  render() {
    const { pokemonName, filterByName } = this.props;
    return (
      <main className="app__main">
        <Filter pokemonName={pokemonName} filterByName={filterByName} />
      </main>
    );
  }
}

Main.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  filterByName: PropTypes.func.isRequired
}

export default Main;