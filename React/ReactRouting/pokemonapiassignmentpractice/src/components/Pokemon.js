import React, {useState, useEffect} from 'react';

const Pokemon = (props)=>{
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);
    return (
        <div>
          <button className="btn btn-secondary w-25 m-1">Fetch Pokemon</button>
          {
              pokemon.length >0 && pokemon.map((pokemon, index)=>{
                  return (
                      <div key = {index}
                    //   className="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)"
                       className = "card-body  h-200 mx-1 my-3 w-5 rounded bg-info text-dark"
                      >
                      {<p>{pokemon.name.slice(0,1).toUpperCase() + pokemon.name.slice(1,pokemon.name.length)}</p>}

                      </div>
                  )
              })
          }
           
        </div>
    )
}
export default Pokemon;