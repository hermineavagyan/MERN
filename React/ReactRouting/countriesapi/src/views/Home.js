import React, {useState} from "react";
import Form from "../components/Form";
import DisplayAll from "../components/DisplayAll";


const Home = (props) =>{
    const [countryList, setCountryList] = useState([]);

    return (
        <div>
            <Form countryList = {countryList} setCountryList = {setCountryList}></Form>
            <DisplayAll countryList = {countryList} setCountryList = {setCountryList}></DisplayAll>
        </div>
    )
}
export default Home;
