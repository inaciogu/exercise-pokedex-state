import React from 'react';
import Pokedex from './components/pokedex/pokedex';
import Header from './header';
import pokemons from './data';
import Footer from './footer';

import './app.css'

class App extends React.Component {
  render() {
    return (
      <div className= 'app'>
        <Header />
        <Pokedex pokemons= {pokemons} />
      </div>
    );
  }
}

export default App;
