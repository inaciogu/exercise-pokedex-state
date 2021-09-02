import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className= 'header'>
        <h1>My Pokedex </h1>
        <img className= 'pokeball' src ="/images/pokedex.png" alt= 'A pokeball' ></img>
      </header>
    )
  }
}

export default Header;