import React from "react";
import {Link, withRouter} from 'react-router-dom';
import { logout, isAuthenticated } from "../authentication";


const isActive = (history, path)=>{
    if(history.location.pathname === path)
        return {color: "#ff9900"}
    else 
        return {color: "#ffffff"}
};

const MenuBar = ({history})=> (
    <div>
        <ul className="nav nav-tabs bg-primary" >
            <li className="nav-item">
                <Link 
                className="nav-link" 
                style = {isActive(history, "/")} 
                to = "/">
                Home
                </Link>
            </li>
            <li className="nav-item">
                <Link 
                className="nav-link" 
                style = {isActive(history, "/users")} 
                to = "/users">
                Users
                </Link>
            </li>
            {
                !isAuthenticated() && 
                (
                    <>
                        <li className="nav-item">
                        <Link className="nav-link" style = {isActive(history, "/login")} to = "/login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" style = {isActive(history, "/register")} to = "/register">Register</Link>
                        </li>
                    </>
                )
            }
            {
                isAuthenticated() && (
                    <>
                        <li className="nav-item">
                            <a className="nav-link" 
                                style = {(isActive(history, "/register"), 
                                    {cursor: "pointer", color: "#fff"})}
                                onClick = {()=>logout(()=>history.push('/')) }>
                            Logout
                            </a>
                        </li>
                        <li className="nav-item" style = {{marginLeft: "50%"}}>
                        <Link
                            to={`/user/${isAuthenticated().user._id}`}
                            style={isActive(history, `/user/${isAuthenticated().user._id}`)}
                            className="nav-link">
                            {`${isAuthenticated().user.name}'s profile`}
                        </Link>
                        </li>
                    </>
                    )
            }
            
        </ul>
    </div>
);
export default withRouter(MenuBar);

