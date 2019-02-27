import React, { Component } from 'react';
import './App.css';
import Home from './presentationalComponents/Home.js'

//for api key use
//API_KEY = process.env.REACT_APP_LISTENNOTES_API_KEY

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
