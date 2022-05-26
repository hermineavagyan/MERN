import React from "react";
import {Link, withRouter} from 'react-router-dom';

const isActive = (history, path)=>{
    if(history.location.pathname === path)
        return {color: "#ff9900"}
    else 
        return {color: "#ffffff"}
}

const MenuBar = ({history})=> (
    <div>
        <ul className="nav nav-tabs bg-primary" >
            <li className="nav-item">
                <Link className="nav-link" style = {isActive(history, "/")} to = "/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style = {isActive(history, "/login")} to = "/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style = {isActive(history, "/register")} to = "/register">Register</Link>
            </li>
        </ul>
    </div>
);
export default withRouter(MenuBar);

