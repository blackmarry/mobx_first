import React, { Component } from 'react';

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

//import CounterStore from './CounterStore';
//import Counter from './Counter';

import PokemonStore from './PokemonStore';
import Pokemon from './Pokemon';
import MainBody from './MainBody';

import "./App.css";

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <h1>Pokemon</h1>
          <div>
            <MainBody />
            <Pokemon store={PokemonStore} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
