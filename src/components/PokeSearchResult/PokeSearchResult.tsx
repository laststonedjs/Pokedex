import React from 'react';
import './PokeSearchResult.css';


const PokeSearchResult = () => {
    const selectedPokemon = false;


    return (
        <div className="poke-result-card">
            {
                selectedPokemon
                    ? (
                        <div>
                            {/* Add img here */}
                            <p>Name: Pikachu</p>
                            <p>Id: Pika01</p>
                            <p>Height: 36 cm</p>
                            <p>Weight: 270 g</p>
                            <p>Base Exp: 150xp</p>
                        </div>
                    )
                    : (
                        <h2>Welcome to the Pokedex!</h2>
                    )
            }
        </div>
    )
}

export default PokeSearchResult;