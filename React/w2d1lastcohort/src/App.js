import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Child from './components/Child';

function App() {
  //just an array
  const coolObject = [
    //index 0
    {
      name:"James Hetfield",
      email:"metallica@aol.com",
      city: "San Francisco",
      state:"CA",
      netWorth: 30000000,
      likes: 0
    },
    //index 1
    {
      name:"Kirk Hammett",
      email:"theRipper@aol.com",
      city: "San Francisco",
      state:"CA",
      netWorth: 45000000,
      likes: 0
    },
    //index 2
    {
      name:"Lars Ulrich",
      email:"cantDrum@aol.com",
      city: "San Francisco",
      state:"CA",
      netWorth: 85500000,
      likes: 0
    }
  ];

  // const props = {
  //   coolObject:{
  //     name:"James Hetfield",
  //     email:"metallica@aol.com",
  //     city: "San Francisco",
  //     state:"California",
  //   }
  const [james, kirk, ulrich] = coolObject;
  return (
    <div className="App">
    <Header/>
    

    {/* <Child name = {coolObject[0].name}
    email = {coolObject[0].email}
    city = {coolObject[0].city}
    state = {coolObject[0].state}
    /> 

    <Child name = {coolObject[1].name}
    email = {coolObject[1].email}
    city = {coolObject[1].city}
    state = {coolObject[1].state}
    /> 
    <Child name = {coolObject[2].name}
    email = {coolObject[2].email}
    city = {coolObject[2].city}
    state = {coolObject[2].state}
    />  */}

{/* <Child name = {james.name}
    email = {james.email}
    city = {james.city}
    state = {james.state}
    /> 
    <Child name = {kirk.name}
    email = {kirk.email}
    city = {kirk.city}
    state = {kirk.state}
    />

<Child name = {ulrich.name}
    email = {ulrich.email}
    city = {ulrich.city}
    state = {ulrich.state}
    /> */}
    <div className='childdiv'>
{
  coolObject.map((object,index)=>(
   
    <Child 
      key = {index}
      name = {object.name}
      email = {object.email}
      city = {object.city}
      state = {object.state}
      likes = {object.likes}
      netWorth = {object.netWorth}
    />
  ))
}
</div>

    </div>
  );
}

export default App;
