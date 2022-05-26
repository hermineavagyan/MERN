import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './main/Home';
import Register from './user/Register';
import Login from './user/Login';

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/register" component = {Register}/>
            <Route exact path = "/login" component={Login}/>
        
        </Switch>   
    </div>
    )
export default MainRouter;