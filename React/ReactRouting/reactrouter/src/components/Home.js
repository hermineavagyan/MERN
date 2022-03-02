import React from "react";
import { Link } from "react-router-dom";
const Home = (props)=>{

    return (
        <div>
           <h1 style = {{color: "pink"}}>
           Home Component
           </h1>
           <Link to={"/about"}>About</Link>
           <hr/>
           <Link to={"/contact"}>Contact</Link>
        </div>
    )
}
export default Home;
