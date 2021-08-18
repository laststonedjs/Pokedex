import { PokemonSchema } from '../../types/PokemonSchema';
import Pokecard from '../Pokecard/Pokecard';
import './Pokelist.css'

interface PokelistProps {
    searchedPokemons: PokemonSchema[];
}

const Pokelist = ({searchedPokemons}: PokelistProps) => {
    return (
        <div className="pokelist">
          {searchedPokemons.map((pokemon) => {
              return  (
                  pokemon.name && (
                    <Pokecard
                    key={pokemon.id}
                    name={pokemon.name}
                    spriteUrl={pokemon.sprites.normal}
                    />
                  )
                 
              );
          })}  
        </div>
    )
}

export default Pokelist;