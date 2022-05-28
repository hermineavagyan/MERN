import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './main/Home';
import Register from './user/Register';
import Login from './user/Login';
import MenuBar from './main/MenuBar';
import Profile from "./user/Profile";
import Users from './user/Users';
import EditProfile from './user/EditProfile';

const MainRouter = () => (
    <div>
    <MenuBar/>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/users" component={Users}/>
            <Route exact path = "/register" component = {Register}/>
            <Route exact path = "/login" component={Login}/>
            <Route exact path = "/user/edit/:userId" component={EditProfile}/>
            <Route exact path = "/user/:userId" component={Profile}/>
            
        
        </Switch>   
    </div>
    )
export default MainRouter;

