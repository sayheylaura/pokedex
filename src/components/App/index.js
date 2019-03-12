import React, { Component } from 'react';
import './App.scss';
import { fetchPokemons } from '../../services/PokemonService';
import Triangle from '../Triangle';
import Circle from '../Circle';
import Header from '../Header';
import Main from '../Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        pokemonName: ''
      },
      pokemonData: [],
      isFetching: true
    }

    this.saveUserQuery = this.saveUserQuery.bind(this);
  }

  componentDidMount() {
    this.getDataFromLocalStorage();
  }

  fetchAndSaveData() {
    fetchPokemons()
      .then(data => {
        const results = data.results;

        const promises = results.map(item => {
          const promise = fetch(item.url).then(response => response.json());
          return promise;
        });

        Promise.all(promises)
          .then(responses => {
            responses.forEach(response => {
              this.setState(prevState => {
                const newState = {
                  pokemonData: prevState.pokemonData.concat(response),
                  isFetching: false
                };
                this.saveDataAtLocalStorage(newState.pokemonData);
                return newState;
              })
            })
          })
      })
  }

  saveDataAtLocalStorage(data) {
    localStorage.setItem('savedData', JSON.stringify(data));
  }

  getDataFromLocalStorage() {
    const savedData = localStorage.getItem('savedData');
    const parsedData = JSON.parse(savedData);
    if (!savedData) {
      this.fetchAndSaveData();
    } else {
      this.setState({
        pokemonData: parsedData,
        isFetching: false
      })
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
    const { filters, isFetching } = this.state;
    const { pokemonName } = filters;
    const filteredPokemons = this.filterPokemonsByName();
    return (
      <div className="App">
        <Triangle styles="triangle triangle-left" />

        <Triangle styles="triangle triangle-right" />

        <Header
          pokemonName={pokemonName}
          saveUserQuery={this.saveUserQuery}
        />
        
        <Main
          pokemonData={filteredPokemons}
          isFetching={isFetching}
        />

        <Circle styles="circle circle-left" />

        <Circle styles="circle circle-right" />
      </div>
    );
  }
}

export default App;
