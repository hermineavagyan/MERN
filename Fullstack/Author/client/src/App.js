import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import AllAuthors from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from './components/Update';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<AllAuthors/>}/>
          <Route path = "/author/:id" element = {<DisplayOne/>}/>
          <Route path = "/author/new" element = {<Create/>}/>
          <Route path = "/author/edit/:id" element = {<Update/>}/>
          {/* <Route path = "/author/:id/:likes" element = {<DisplayOne/>}></Route> */}

        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
