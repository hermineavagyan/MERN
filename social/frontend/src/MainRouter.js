import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './main/Home';
import Register from './user/Register';

const MainRouter = () => (
    <div>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/register" element = {<Register/>}/>
        </Routes>   
    </div>
    )


export default MainRouter;