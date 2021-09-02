import React from 'react';
import './style.css'
import pokemons from './../../data';
import Pokemon from './../pokemon/pokemon'
import Button from '../button/button';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemonIndex: 0,
      list: pokemons,
    }
    this.handleButton = this.handleButton.bind(this);
    this.allPokemons = this.allPokemons.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
  }

  handleButton = () => {
    this.setState((prevState, _props) => ({
      pokemonIndex: prevState.pokemonIndex + 1,
    }))
    if (this.state.pokemonIndex === this.state.list.length - 1) {
      this.setState({
        pokemonIndex: 0,
      })
    }
  }

  // Elimina tipos repetidos
  
  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
  }

  //A biblioteca Bootstrap foi utilizada nessa aplicação. source: https://getbootstrap.com/docs/5.1/components/buttons/


  filterPokemon = (type) => {
    const nextButton = document.querySelector('.btn-dark')
    const pokemonList = pokemons.filter((pokemon) => {
      return pokemon.type === type
    })
    this.setState({
      pokemonIndex: 0,
      list: pokemonList,
    })
    if (pokemonList.length <= 1) {
      nextButton.classList.add('disabled');
    } else {
      nextButton.classList.remove('disabled')
    }
  }

  allPokemons = () => {
    this.setState({
      list: pokemons,
      pokemonIndex: 0,
    })
    document.querySelector('.btn-dark').classList.remove('disabled')
  }

  render() {
    console.log(document.querySelector('.btn-primary'))
    const pokemonTypes = this.fetchPokemonTypes();
    return (
      <div className="pokedex">
        <div>
          <Pokemon pokemon={this.state.list[this.state.pokemonIndex]} key={pokemons.id} />
        </div>
        <div>
          <Button onClick={() => this.allPokemons()} className="btn btn-primary">
            All
          </Button>
          {pokemonTypes.map((type) => <Button 
          key={ type } 
          onClick={() => this.filterPokemon(type )} 
          className="btn btn-warning">
            { type }
          </Button>)}
        </div>
        <Button 
        onClick={() => this.handleButton()} className="btn btn-dark">
          Next Pokemon
        </Button>
      </div>

    )
  }
}


export default Pokedex;