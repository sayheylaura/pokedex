import React, { Component } from 'react';
import './App.scss';
import Main from '../Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: ""
    }

    this.filterByName = this.filterByName.bind(this);
  }

  filterByName() {
    console.log('filtering by name');
  }

  render() {
    const { pokemonName } = this.state;
    return (
      <div className="App">
        <Main pokemonName={pokemonName} filterByName={this.filterByName} />
      </div>
    );
  }
}

export default App;
