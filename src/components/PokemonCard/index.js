import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PokemonCard.scss';

class PokemonCard extends Component {
  render() {
    const { pokemon } = this.props;
    const { sprites, id, name, types } = pokemon;
    return (
      <div className="pokemon__card">
        <div className="pokemon__image-wrapper">
          <img src={sprites.front_default} alt={name} className="pokemon__image"></img>
          <div className="pokemon__id">ID / {id}</div>
        </div>
        <div className="pokemon__data-wrapper">
          <div className="pokemon__name">{name}</div>
          <ul className="pokemon__types-list">
            {types.map((item, ind) => {
              return (
                <li key={ind} className="pokemon__types-item">{item.type.name}</li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
}

export default PokemonCard;