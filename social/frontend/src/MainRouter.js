import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './main/Home';
import Register from './user/Register';
import Login from './user/Login';

const MainRouter = () => (
    <div>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/register" element = {<Register/>}/>
            <Route path = "/login" element = {<Login/>}/>
        
        </Routes>   
    </div>
    )


export default MainRouter;