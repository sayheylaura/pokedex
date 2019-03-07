import React, { Component } from 'react';
import './App.scss';
import { fetchPokemons } from '../../services/PokemonService';
import Main from '../Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        pokemonName: ""
      },
      pokemonData: []
    }

    this.filterPokemons = this.filterPokemons.bind(this);
  }

  componentDidMount() {
    fetchPokemons()
      .then(pokemonData => {
        console.log(pokemonData);
        const results = pokemonData.results;
        console.log(results);
        results.forEach(item => {
          fetch(item.url)
            .then(response => response.json())
            .then(itemData => {
              console.log('itemData', itemData);
              this.setState(prevState => {
                const newState = {
                  pokemonData: prevState.pokemonData.concat(itemData)
                };
                this.saveDataAtLocalStorage(newState.pokemonData);
                return newState;
              })
            })
        })
      })
  }

  saveDataAtLocalStorage(data) {
    localStorage.setItem("savedData", JSON.stringify(data));
  }

  filterPokemons(e) {
    const { name, value } = e.currentTarget;
    this.setState(prevState => {
      const newState = {
        filters: {
          ...prevState.filters,
          [name]: value
        }
      };
      return newState;
    })
  }

  render() {
    const { filters } = this.state;
    const { pokemonName } = filters;
    return (
      <div className="App">
        <Main pokemonName={pokemonName} filterPokemons={this.filterPokemons} />
      </div>
    );
  }
}

export default App;
