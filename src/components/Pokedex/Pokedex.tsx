import React from 'react';
import { PokemonSchema } from '../../types/PokemonSchema';
import Pokelist from '../Pokelist/Pokelist';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import Searchbox from '../Searchbox/Searchbox';
import './Pokedex.css';


interface PokedexProps {
    searchedPokemons: PokemonSchema[];
}

const Pokedex = ({ searchedPokemons }: PokedexProps) => {
    return (
    // left side
    <div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox />
                <Pokelist
                    searchedPokemons= {searchedPokemons}
                />
            </div>
    
            <div className="pokesearchresult-container">
               <PokeSearchResult />
            </div>
        </div>
    )


}

export default Pokedex;