import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = (props)=>{
    const [pokemon, setPokemon] = useState("");
    const [pokeList, setPokeList] = useState([]);
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
          .then((res)=>{
            console.log(res);
            console.log(res.data.results);
            setPokeList(res.data.results)
          })
          .catch((err)=>console.log(err))
    
      },[])
    return (
        <div>
          <button className="btn btn-primary m-1"> Fetch PokeName</button>
              
            {
    pokeList?
        pokeList.map((pokemon, index) =>(
            <div key = {index}>
            <ul class="list-unstyled"><li>{pokemon.name.slice(0,1).toUpperCase() + pokemon.name.slice(1,pokemon.name.length)}</li></ul>
            
            
            </div>
        
        )) :null
    }
        </div>
    )
}
export default Pokemon;



