import React,{useState} from "react";

const Header = (props)=>{

    return(
        <div>
            <ul style = {{display:"flex", listStyle:"none", justifyContent: "space-around", margin:"30px",borderBottom:"3px double black", paddingBottom:"20px"}}>
                <li><a href = "#" style = {{textDecoration: "none", color: "black"}}>Home</a></li>
                <li><a href = "#" style = {{textDecoration: "none", color: "black"}}>About</a></li>
                <li><a href = "#" style = {{textDecoration: "none", color: "black"}}>Contact</a></li>
            </ul>
        </div>
    )
}
export default Header;