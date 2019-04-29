import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {

  state = {
    pokemon: [],
    query: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon: pokemon }))
      .catch(e => console.error(e))
  }

  addPokemon = pokemon => {
    this.setState({ pokemon: [...this.state.pokemon, pokemon] })
  }

  handleSearchChange = (event, {value}) => {
    this.setState({
      query: value
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} query={this.state.query}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonIndex
