import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplayOne = (props) =>{
    const {countryCode, rating, review} = useParams();
    const [country, setCountry] = useState({});
    
    useEffect(()=>{
        axios.get((`https://restcountries.com/v2/alpha/${countryCode}`))
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                //console.log(res.data);
                setCountry(res.data)
                
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            <p>Country Name: {country.name}</p>
            <p>Country Population: {country.population}</p>
            {
                rating?
                <p>Thank you for rating my country {rating}!</p>
                :null
            }
            {
                review?
                <p>Your review: {review}!</p>
                :null
            }
        {/* {
            country.name?
            <p>{country.name.common}</p>
            :null
        } */}
        </div>
    )
}
export default DisplayOne;

