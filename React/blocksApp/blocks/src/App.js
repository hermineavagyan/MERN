import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Main/>
      
      <Footer/>
    </div>
  );
}

export default App;
