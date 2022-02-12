import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  
  return (
    <div className="App">
      <Header
        name = "Hermine" 
      />
      <Main
        text = "Things to do"
      />  
    </div>
  );
}

export default App;
