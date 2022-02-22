import React,{useState} from "react";

const Header = (props)=>{
    const {themeMode, setThemeMode} = props;

    const themeHandler = (e) =>{
        setThemeMode({
            text: e.target.value + " mode",
            style: e.target.value,
        })
    }
    const styleThemeMode = {
        display: "inline-flex",
        marginRight: "90%",
        marginTop: "10px",
    }

    return(
        <div>
        <div style={styleThemeMode}>
            <input onClick={themeHandler} name = "theme" type = "radio" value = "day"/>
            <label htmlFor="">Day Mode</label>

            <input onClick={themeHandler} name = "theme" type = "radio" value = "night"/>
            <label htmlFor="">Night Mode</label>

            <input onClick={themeHandler} name = "theme" type = "radio" value = "sepia"/>
            <label htmlFor="">Sepia Mode</label>
        </div>
            <ul style = {{display:"flex", listStyle:"none", justifyContent: "space-around", margin:"30px",borderBottom:"3px double black", paddingBottom:"20px"}}>
                <li><a href = "#" style = {{textDecoration: "none", color: "black"}}>Home</a></li>
                <li><a href = "#" style = {{textDecoration: "none", color: "black"}}>About</a></li>
                <li><a href = "#" style = {{textDecoration: "none", color: "black"}}>Contact</a></li>
            </ul>
        </div>
    )
}
export default Header;