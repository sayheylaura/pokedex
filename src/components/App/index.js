import React, { Component } from 'react';
import './App.scss';
import Main from '../Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        pokemonName: ""
      }
    }

    this.filterByName = this.filterByName.bind(this);
  }

  filterByName(e) {
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
        <Main pokemonName={pokemonName} filterByName={this.filterByName} />
      </div>
    );
  }
}

export default App;
