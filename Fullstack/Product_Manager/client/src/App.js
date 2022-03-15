import CreateForm from './components/CreateForm';
import React from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Update from './components/Update';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route element={<Main/>} path="/" default />
      <Route element={<ProductDetail/>} path="/product/:id"/>
      <Route element={<Update/>} path="/product/edit/:id"/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
