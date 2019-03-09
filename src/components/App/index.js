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
      pokemonData: this.getDataFromLocalStorage()
    }

    this.saveUserQuery = this.saveUserQuery.bind(this);
  }

  fetchAndSaveData() {
    fetchPokemons()
      .then(data => {
        const results = data.results;
        results.forEach(item => {
          fetch(item.url)
            .then(response => response.json())
            .then(itemData => {
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

  getDataFromLocalStorage() {
    const savedData = localStorage.getItem("savedData");
    if (!savedData) {
      this.fetchAndSaveData();
      return [];
    } else {
      return JSON.parse(savedData);
    }
  }

  saveUserQuery(e) {
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

  filterPokemonsByName() {
    const { pokemonData, filters } = this.state;
    const { pokemonName } = filters;
    const filteredPokemons = pokemonData.filter(pokemon => {
      return !pokemonName || pokemon.name.includes(pokemonName.toLowerCase());
    });
    return filteredPokemons;
  }

  render() {
    const { filters } = this.state;
    const { pokemonName } = filters;
    const filteredPokemons = this.filterPokemonsByName();
    return (
      <div className="App">
        <Main
          pokemonName={pokemonName}
          pokemonData={filteredPokemons}
          saveUserQuery={this.saveUserQuery}
        />
      </div>
    );
  }
}

export default App;
