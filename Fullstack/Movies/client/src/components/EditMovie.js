//axios, useEffect, useState, Link

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";



const EditMovie = (props) => {


    // const [title, setTitle] = useState("");
    // const [genre, setGenre] = useState("");
    // const [boxArt, setBoxArt] = useState("");
    // const [watchLength, setWatchLength] = useState(0);
    // const [rating, setRating] = useState("");
    // const [actors, setActors] = useState("");
    // const [kidFriendly, setKidFriendly] = useState(false);
    // const [yearReleased, setYearReleased] = useState(0);

    const [editMovie, setEditMovie] = useState({
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

    const { id } = useParams();

    const navigate = useNavigate();



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setEditMovie(res.data);
            })
            .catch((err)=>console.log(err))
    },[id])

    const editSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/movies/${id}`,
           editMovie)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);}
    )
}

    const onChangeHandler = (e)  => {
        const newStateObject = {...editMovie};
        if (e.target.name === "kidFriendly")
        { newStateObject[e.target.name] = e.target.checked;
            //same as title = e.target.value
            console.log ("e.target.name = ", e.target.name);
            console.log ("e.target.checked = ", e.target.checked);
            setEditMovie(newStateObject);
        }
        else{
            newStateObject[e.target.name] = e.target.value;
            //same as title = e.target.value
            console.log ("e.target.name = ", e.target.name);
            console.log ("e.target.value = ", e.target.value);
            setEditMovie(newStateObject);
        }

    }


    return (
        <div>
            <Header 
                titleText = "Update Movie"
                link = "/"
                linkText = "Return Home"
            />

<Form
                submitHandler = {editSubmitHandler}
                movie = {editMovie}
                errors = {errors}
                buttonText = {"Update movie"}
                onChangeHandler = {onChangeHandler}
            />


        </div>
    )
}




export default EditMovie;