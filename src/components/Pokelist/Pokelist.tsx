import Pokecard from '../Pokecard/Pokecard';
import './Pokelist.css'

const Pokelist = () => {
    return (
        <div className="pokelist">
            <Pokecard name="pikachu" />
            <Pokecard name="bulbasaur" />
            <Pokecard name="ivysaur" />
            <Pokecard name="venasaur" />
            <Pokecard name="charizard" />
        </div>
    )
}

export default Pokelist;