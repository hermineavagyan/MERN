import React, {useState} from "react";
import Home from "../views/Home";
import { Link } from "react-router-dom";


const DisplayAll = (props) =>{
    const {countryList, setCountryList} = props;
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState ("");
    
    //not a good way to directly manipulate an individual item from state rather than manipulating the state itself
    const ratingHandler = (e, country)=>{
        //e.preventDefault();
        country.rating = e.target.value;
        setRating(e.target.value);
    }
//a better way to directly manipulate an item from state
    const reviewHandler = (e, countryFromBelow)=>{
        let countryListCopy = countryList.map((country)=>{
            if (country === countryFromBelow){
                let countryCopy = {...countryFromBelow};
            countryCopy.review = e.target.value;
            console.log(countryCopy);
            setReview(e.target.value);
            return countryCopy;
            }
            else {
                return country;
            }
        })
        setCountryList(countryListCopy);
    }

    const paramsHandler = (country)=>{
        if (country.rating && country.review){
            return (
                <Link className="card-title border py-3 px-3 bg-secondary text-light fw-bold" 
                to={`/country/${country.alpha2Code}/${country.rating}/${country.review}`}>
                {country.name}
                </Link> 
            )
        }
        else if (country.rating){
            return (
                <Link className="card-title border py-3 px-3 bg-secondary text-light fw-bold" 
                to={`/country/${country.alpha2Code}/${country.rating}`}>
                {country.name}
                </Link> 
            )
        }
        else {
            return (
                <Link className="card-title border py-3 px-3 bg-secondary text-light fw-bold" 
                to={`/country/${country.alpha2Code}`}>
                {country.name}
                </Link> 
            )
        }
    }
    return (
        <div className = "d-flex p-2 bd-highlight flex-wrap border w-75 mx-auto justify-context-around">
            {
                countryList.map((country, index) =>(
                    <div key = {index}
                        className = "card m-2 w-10 rounded"
                    >
                    {
                        paramsHandler(country)
                    }
                    {/* <Link className="card-title border py-3 px-3 bg-secondary text-light fw-bold" to={`/country/${country.alpha2Code}`}>{country.name}</Link>   */}
                    <input type = "number"
                        className="form-control mx-auto text-center my-3 border border-3 p-2"
                        placeholder="Rating"
                        onChange={(e)=>ratingHandler(e, country)}
                    />
                    {
                        country.rating?
                        <div>
                            <label htmlFor="review">Please leave a review (Optional)</label>
                            <textarea className="form-control mx-auto text-center my-3 border border-3 fixed-bottom w-50" 
                                placeholder={`${country.name} Review`}
                                type = "text"
                                onChange = {(e)=>reviewHandler(e, country)}
                            />
                        </div>
                        :null
                    }
                    <p> {country.population}</p>
                    <p> {country.capital}</p>
                    <p> {country.alpha2Code}</p>
                    <img style = {{objectFit: "cover", height: "100px"}} src={country.flag} alt = "Country flag"/>
                    
                    </div>
                )

                )
            }
        </div>
    )
}
export default DisplayAll;
