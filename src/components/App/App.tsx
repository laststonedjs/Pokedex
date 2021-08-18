import React from 'react';
import { pokemonData } from '../../data/PokemonData';
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../../types/PokemonSchema';
import Pokedex from '../Pokedex/Pokedex';
import './App.css';

interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}


class App extends React.Component<any, AppState> {
    state = {
        searchField: "",
        allPokemons: [],
        searchedPokemons: [],
        selectedPokemon: undefined
    };

    patchPokemonData = (pokemons: UnpatchedPokemonSchema[]): PokemonSchema[] => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = { 
                normal: undefined,
                animated: undefined
            };

            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch (e) {
                console.log("Exceptional while parsing the sprites", e);
                
            }

            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites
            };

            return patchedPokemon;
        });

            return patchedPokemons;
    }

    componentDidMount () {
        // patch the stringified pokemon sprites
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
            pokemonData
        );
        

        // update the state with the patched pokemons
            this.setState({
                allPokemons: patchedPokemons,
                searchedPokemons: patchedPokemons,
            });

    }


    render() {
        return <div className="App">
            <h1>Pokedex</h1>
            <Pokedex 
                searchedPokemons={this.state.searchedPokemons}
            />
        </div>;
    }
}

export default App;