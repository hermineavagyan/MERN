import React, {useState} from "react";
import Home from "../views/Home";
import { Link } from "react-router-dom";


const DisplayAll = (props) =>{
    const {countryList, setCountryList} = props;

    return (
        <div>
            {
                countryList.map((country, index) =>(
                    <div key = {index}>
                  <Link to={`/country/${country.alpha2Code}`}>{country.name}</Link>  
                    <p>{country.population}</p>
                    <p> {country.capital}</p>
                    <p>{country.alpha2Code}</p>
                        
                        
                       
                    
                    </div>
                )

                )
            }
        </div>
    )
}
export default DisplayAll;
