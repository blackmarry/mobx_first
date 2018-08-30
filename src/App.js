import React, { Component } from 'react';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

//import CounterStore from './CounterStore';
//import Counter from './Counter';

import MainBody from './MainBody';

import "./App.css";

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div>
            <MainBody />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
