import React from "react";
//import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Word = (props) =>{
    const {param, bgColor, color} = useParams();
    return (
        <div>
        {
            isNaN(param)?
            <h1 style = {{color: color, backgroundColor: bgColor}}>
            The word is: {param}
            </h1>
        : <p>The number is {param}</p>
        }
        </div>
    )
}
export default Word;