import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './main/Home';
import Register from './user/Register';
import Login from './user/Login';
import MenuBar from './main/MenuBar';
import Profile from "./user/Profile";

const MainRouter = () => (
    <div>
    <MenuBar/>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/register" component = {Register}/>
            <Route exact path = "/login" component={Login}/>
            <Route exact path = "/user/:userId" component={Profile}/>
        
        </Switch>   
    </div>
    )
export default MainRouter;

