//hooks
import {useState, useEffect, Fragment} from "react";

//axios
import axios from "axios";

//components
import CardPokemon from "../components/CardPokemon";

const Homepage = () => {
  const [pokemon, setPokemon] = useState([]);
  
  const getPokemonList = async () => {
    let pokemonArray = [];
    for(let i = 1; i <= 21; i++){
      pokemonArray.push(await getPokemonData(i));
    }
    setPokemon(pokemonArray);
  }

  const getPokemonData = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response;
  }
  useEffect(() => {
    getPokemonList();
  }, [])

  return (
    <div className="container">
      <div className="row">
        {pokemon.map(pokemon => {
          return(
            <CardPokemon
              key={pokemon.data.id}
              pokemon={pokemon.data}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Homepage