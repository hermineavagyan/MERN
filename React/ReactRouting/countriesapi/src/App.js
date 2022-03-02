import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Form from './components/Form';
// import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path = "/" element = {<Home/>}></Route>
    <Route path = "/country/:countryCode" element = {<DisplayOne/>}></Route>
    <Route path = "/country/:countryCode/:rating" element = {<DisplayOne/>}></Route>
    <Route path = "/country/:countryCode/:rating/:review" element = {<DisplayOne/>}></Route>
    
    </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
