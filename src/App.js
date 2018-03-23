import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header/Header';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div>

          <Header/>
          {routes}

        </div>
      </div>
    );
  }
}

export default App;
