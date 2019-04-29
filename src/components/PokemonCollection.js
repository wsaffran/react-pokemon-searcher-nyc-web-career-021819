import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemon = () => {
    return this.filterPokemon().map(pokemon => {
      return <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.stats.find(stat => stat.name === 'hp').value} url={pokemon.sprites}/>
    })
  }

  filterPokemon = () => {
    return this.props.pokemon.filter(pokemon => {
      return pokemon.name.includes(this.props.query)
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
