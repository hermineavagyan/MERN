import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Form from './components/Form';
// import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path = "/" element = {<Home/>}></Route>
    <Route path = "/country/:countryCode" element = {<DisplayOne/>}></Route>
    
    </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
