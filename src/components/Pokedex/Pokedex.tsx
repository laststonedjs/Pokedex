import React from 'react';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import Searchbox from '../Searchbox/Searchbox';
import './Pokedex.css';


const Pokedex = () => {
    return (
    // left side
    <div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox />
            </div>
    
            <div className="pokesearchresult-container">
               <PokeSearchResult />
            </div>
        </div>
    )


}

export default Pokedex;