
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [planet, setPlanet] = useState({});
  const [inhabitantsLink, setInhabitantsLink] = useState([]);
  const [inhabitants, setInhabitants] = useState({});
  const [planetNumber, setPlanetNumber] = useState(1);
  const [toggle, setToggle] = useState(false);

  // useEffect(()=>{
  //   //fetch ("https://swapi.dev/api/planets/" + planetNumber)
  //   fetch(`https://swapi.dev/api/planets/${planetNumber}`)
  //     .then((res) =>{
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then((res)=>{
  //       console.log(res);
  //       setPlanet(res);
  //     })
  //     .catch((err)=>console.log(err))

  // },[planetNumber])

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/planets/${planetNumber}`)
      .then((res)=>{
        console.log(res);
        setPlanet(res.data);
        console.log(res.data.residents);
        setInhabitantsLink(res.data.residents)
      })
      .catch((err)=>console.log(err))

  },[planetNumber])

  useEffect(()=>{
    // we need to make sure there is something there because of async nature of back-to-back request
    if (inhabitantsLink[0]){
      axios.get(inhabitantsLink[0])
      .then((res)=>{
        console.log(res);
        console.log(res.data);
        setInhabitants(res.data)
      })
      .catch((err)=>console.log(err))
    }
  }, [inhabitantsLink])
  const planetChangerNext = (e)=>{
    if (planetNumber === 60){
      setPlanetNumber(1);
    }
    else {
      setPlanetNumber(planetNumber + 1);
    }
  }

  const planetChangerPrevious = (e)=>{
    if (planetNumber === 1){
      setPlanetNumber(60);
    }
    else {
      setPlanetNumber(planetNumber - 1);
    }
  }


  return (
    <div className="App">
    <p>name: {planet.name}</p>
    <p>climate: {planet.climate}</p>
    <p>population: {planet.population}</p>
    <p>surface_water: {planet.surface_water}</p>
    <button onClick = {(e)=>setToggle(!toggle)}>Get a person</button>
    <button onClick={planetChangerPrevious}>Previous</button>
    <button onClick={planetChangerNext}>Next</button>
    
      {
        toggle && inhabitants.name?
        <p>Famous citizen: {inhabitants.name}</p>
        : null
      }
    </div>
  );
}

export default App;
