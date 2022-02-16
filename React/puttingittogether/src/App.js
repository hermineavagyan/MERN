import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const person = [ {
    firstName:"Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "Black"
  },
  {
    firstName:"John",
    lastName: "Smith",
    age: 88,
    hairColor: "Brown"
  },
  {
    firstName:"Millard",
    lastName: "Fillmore",
    age: 50,
    hairColor: "Brown"
  },
  {
    firstName:"Maria",
    lastName: "Smith",
    age: 62,
    hairColor: "Brown"
  },
]
  return (

    <div className="App">
    {/* <PersonCard person = {person[0]}></PersonCard>
    <PersonCard person = {person[1]}></PersonCard>
    <PersonCard person = {person[2]}></PersonCard> */}
    {/* <PersonCard 
      firstName = {person[0].firstName}
      lastName = {person[0].lastName}
      age = {person[0].age}
      hairColor = {person[0].hairColor}
    />
    <PersonCard 
      firstName = {person[1].firstName}
      lastName = {person[1].lastName}
      age = {person[1].age}
      hairColor = {person[1].hairColor}
    />
    <PersonCard 
      firstName = {person[2].firstName}
      lastName = {person[2].lastName}
      age = {person[2].age}
      hairColor = {person[2].hairColor}
    />
    <PersonCard 
      firstName = {person[3].firstName}
      lastName = {person[3].lastName}
      age = {person[3].age}
      hairColor = {person[3].hairColor}
    /> */}
    {
      person.map((onePerson, index)=>{
        return (<PersonCard
        key = {index}
        firstName = {onePerson.firstName}
        lastName = {onePerson.lastName}
        age = {onePerson.age}
        hairColor = {onePerson.hairColor}
        />
        )
        
    })
      } 
    </div>
  );
}

export default App;
