import React from 'react';
import { PokemonSchema } from '../../types/PokemonSchema';
import Pokelist from '../Pokelist/Pokelist';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import Searchbox from '../Searchbox/Searchbox';
import './Pokedex.css';


interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    onInputChange: (inputValue: string) => void;
}

const Pokedex = ({ searchedPokemons, onInputChange }: PokedexProps) => {
    return (
    // left side
    <div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox onInputChange={onInputChange} />
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