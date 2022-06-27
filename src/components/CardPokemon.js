//react
import { Fragment } from "react";

//react-router
import {Link} from "react-router-dom";

const CardPokemon = (props) => {
  //props
  const {pokemon} = props;

  return (
    <Fragment>
      <div className="col-4">
        <div className="card shadow rounded align-items-center py-3 m-2">
          <img src={pokemon.sprites.front_default} alt="..." style={{width: "10rem"}}/>
          <h5 className="card-title text-center">{pokemon.name}</h5>
        </div>
      </div>
    </Fragment>
  );
}

export default CardPokemon
