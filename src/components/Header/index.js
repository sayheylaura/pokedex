import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';

class Header extends Component {
  render() {
    const { pokemonName, saveUserQuery } = this.props;
    return (
      <header className="app__header">
        <Filter pokemonName={pokemonName} saveUserQuery={saveUserQuery} />
      </header>
    );
  }
}

Header.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  saveUserQuery: PropTypes.func.isRequired
}

export default Header;