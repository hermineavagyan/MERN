import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";



const NewMovie = (props) => {

    // const [title, setTitle] = useState("");
    // const [genre, setGenre] = useState("");
    // const [boxArt, setBoxArt] = useState("");
    // const [watchLength, setWatchLength] = useState("");
    // const [rating, setRating] = useState("");
    // const [actors, setActors] = useState("");
    // const [kidFriendly, setKidFriendly] = useState(false);
    // const [yearReleased, setYearReleased] = useState("");
    const [newMovie, setNewMovie] = useState({
        title: "",
        genre: "",
        boxArt: "",
        watchLength: "",
        rating: "",
        actors: "",
        kidFriendly: false,
        yearReleased: ""
    })

    const [errors, setErrors] = useState({});

    

    const navigate = useNavigate();


    const newSubmitHandler = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/movies",
        //request's body that the back-end is asking for (see our controller)... create(req.body) THIS IS THAT!
        newMovie
            
        )
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    const onChangeHandler = (e)  => {
        const newStateObject = {...newMovie};
        if (e.target.name === "kidFriendly")
        { newStateObject[e.target.name] = e.target.checked;
            //same as title = e.target.value
            console.log ("e.target.name = ", e.target.name);
            console.log ("e.target.checked = ", e.target.checked);
            setNewMovie(newStateObject);
        }
        else{
            newStateObject[e.target.name] = e.target.value;
            //same as title = e.target.value
            console.log ("e.target.name = ", e.target.name);
            console.log ("e.target.value = ", e.target.value);
            setNewMovie(newStateObject);
        }

    }


    return (
        <div>
            <Header 
                titleText = "Add a Movie"
                link = "/"
                linkText = "Return Home"
            />
            <Form
                submitHandler = {newSubmitHandler}
                movie = {newMovie}
                errors = {errors}
                buttonText = {"Add a movie"}
                onChangeHandler = {onChangeHandler}
            />


            
        </div>
    )
}




export default NewMovie;