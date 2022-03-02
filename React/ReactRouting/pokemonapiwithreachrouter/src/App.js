
import './App.css';
import React, {useState, useEffect} from 'react';
import {Router, Link} from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayOne from './components/DisplayOne';
import axios from 'axios';

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((res)=>{
        console.log(res);
        console.log(res.data.results);
        setPokeList(res.data.results)
      })
      .catch((err)=>console.log(err))

  },[])
  return (
    <div className="App">

    <Router>
      <DisplayOne pokeName = {pokeName} path = "/pokemon/:nameProp"/>
    </Router>
    <div className = "d-flex p-2 bd-highlight flex-wrap border w-75 mx-auto justify-context-around">
    {
      pokeName?
      <h1>Current pokemon name is: {pokeName}</h1>
      :null
    }
    <hr/>
      {
        pokeList?
          pokeList.map((pokemon, index) =>(
            <div key = {index}>
              <p className = "d-flex p-2 bd-highlight flex-wrap border w-75 mx-auto justify-context-around">{pokemon.name}</p>
              <button onClick = {(e)=>setPokeName(pokemon.name)}
              className="btn btn-primary m-1">Click to setPokeName</button>
              
            </div>
           
          )) :null
      }
    </div>
    {
      pokeName?
      <Link to = {`/pokemon/${pokeName}`}>What do I think of {pokeName}???</Link>
      :null
    }
    </div>
  );
}

export default App;
