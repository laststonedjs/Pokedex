import './Pokecard.css';

const Pokecard = (props: any) => {
    return (
        <div className="pokecard">
            {/* add img here */}
            <p>{props.name}</p>
        </div>
    );
};

export default Pokecard;