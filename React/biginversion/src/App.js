import './App.css';
import PersonCard from './components/PersonCard';
import React, {Component} from 'react';

function App() {

  return (

    <div className="App">
    <div>
    <PersonCard  
    lastName = "Doe" 
    firstName = "Jane"
    age = {45}
    hairColor = "Black"/>
    </div>
    
    <div>
    <PersonCard 
    lastName = "Smith" 
    firstName ="John"
    age = {88}
    hairColor =  "Brown"/>
    </div>
    
    <div>
    <PersonCard 
    lastName ="Fillmore"
    firstName = "Millard"
    age = {50}
    hairColor = "Brown"/>
    </div>
    
    <div>
    <PersonCard
    lastName = "Smith"
    firstName = "Maria"
    age = {62}
    hairColor = "Brown"
    />
    </div>
    </div>
  );
}

export default App;
