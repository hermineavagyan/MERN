import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './main/Home';
import Register from './user/Register';
import Login from './user/Login';
import MenuBar from './main/MenuBar';
import Profile from "./user/Profile";
import Users from './user/Users';
import EditProfile from './user/EditProfile';
import PrivateRoute from './authentication/PrivateRoute';

const MainRouter = () => (
    <div>
    <MenuBar/>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/users" component={Users}/>
            <Route exact path = "/register" component = {Register}/>
            <Route exact path = "/login" component={Login}/>
            <PrivateRoute exact path = "/user/edit/:userId" component={EditProfile}/>
            <PrivateRoute exact path = "/user/:userId" component={Profile}/>
            
        
        </Switch>   
    </div>
    )
export default MainRouter;

