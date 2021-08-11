import React from 'react';
import Pokelist from '../Pokelist/Pokelist';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import Searchbox from '../Searchbox/Searchbox';
import './Pokedex.css';


const Pokedex = () => {
    return (
    // left side
    <div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox />
                <Pokelist />
            </div>
    
            <div className="pokesearchresult-container">
               <PokeSearchResult />
            </div>
        </div>
    )


}

export default Pokedex;