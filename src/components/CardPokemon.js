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
        <div className="card shadow rounded m-3">
          <div className="card-body">
            <img src={pokemon.sprites.front_default} alt="..." className="card-img-top" />
            <h5 className="card-title text-center">{pokemon.name}</h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CardPokemon
