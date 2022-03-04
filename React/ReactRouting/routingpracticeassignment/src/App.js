
import './App.css';
import Word from './components/Word';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path = "/:param" element = {<Word/>}/>
        <Route path = "/:param/:color" element = {<Word/>}/>
        <Route path = "/:param/:color/:bgColor" element = {<Word/>}/>
        <Route/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
