import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonCard extends Component {
  render() {
    const { pokemon } = this.props;
    const { sprites, id, name, types } = pokemon;
    return (
      <div className="pokemon__card">
        <img src={sprites.front_default} alt={name}></img>
        <div>{id}</div>
        <div>{name}</div>
        <ul>
          {types.map((item, ind) => {
            return (
              <li key={ind}>{item.type.name}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonCard;