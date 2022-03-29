import './App.css';
import AllMovies from "./components/AllMovies";
import NewMovie from "./components/NewMovie";
import OneMovie from "./components/OneMovie";
import EditMovie from './components/EditMovie';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (

    <BrowserRouter>
      
      <div className="App">
        {/* We must set up our Route component's  
      inside of the Routes component from react-router-dom  */}
        <Routes>
          <Route element={<AllMovies/>} path="/" />
          <Route element={<NewMovie />} path="/new" />
          {/* This id param will be used and sent as a req.param in our request to the server! */}
          <Route element={<OneMovie />} path="/movie/:id" />
          <Route element={<EditMovie />} path="/movie/edit/:id" />
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;