import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplayOne = (props) =>{
    const {countryCode} = useParams();
    const [country, setCountry] = useState({});
    
    useEffect(()=>{
        axios.get((`https://restcountries.com/v3.1/alpha/${countryCode}`))
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                console.log(res.data[0]);
                setCountry(res.data[0])
                
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
        {
            country.name?
            <p>{country.name.common}</p>
            :null
        }
           
        </div>
    )
}
export default DisplayOne;

