import React, {useEffect,useState} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const DisplayOne = (props) =>{
    const {countryCode,rating, review} = props;
    const [country, setCountry] = useState({});

    useEffect(()=>{
        axios.get(`https://restcountries.com/v2/alpha/${countryCode}`)
        .then((res) =>{
            console.log(res, "Success");
            console.log(res.data);
            setCountry(res.data)
        })
        .catch((err)=>console.log(err))

    },[])

    return(
        <div>
        {
           country?
            <div>
            <p>{country.name}</p>
                <p>{country.population}</p>
           
            {
                rating?
                <p>Thanks for rating {rating} of our Country</p>
                :null
            }
            {
                review?
                <p>Your review: {review}</p>
                :null
            }
       

            </div>
         :null
        }
        </div>
    
    )
}
export default DisplayOne;