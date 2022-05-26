import React from "react";
import {Link, withRouter} from 'react-router-dom';
import { logout, isAuthenticated } from "../authentication";

const isActive = (history, path)=>{
    if(history.location.pathname === path)
        return {color: "#ff9900"}
    else 
        return {color: "#ffffff"}
};

// export const logout = (next) => {
//     if (typeof window !== "undefined") {
//         localStorage.removeItem("jwt")
//     }
//     next()
//     return fetch("http://localhost:8080/signout",
//         {method: "GET"})
//         .then(res => {
//             console.log('signout',res)
//             return res.json()
//         })
//         .catch(err =>console.log(err))
// };
// export const isAuthenticated = ()=>{
//     if(typeof window == "undefined"){
//         return false; 
//     }
//     if(localStorage.getItem("jwt")){
//         return JSON.parse(localStorage.getItem("jwt"));
//     }
//     else{
//         return false;
//     }
// }

const MenuBar = ({history})=> (
    <div>
        <ul className="nav nav-tabs bg-primary" >
            <li className="nav-item">
                <Link className="nav-link" style = {isActive(history, "/")} to = "/">Home</Link>
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
                            <a className="nav-link">
                            Welcome {isAuthenticated().user.name}
                            </a>
                        </li>
                    </>
                    )
            }
            
        </ul>
    </div>
);
export default withRouter(MenuBar);

