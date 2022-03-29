import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";



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


    const submitHandler = (e)=>{
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


            <form onSubmit={submitHandler}>

                <div>
                    <label>Title</label>
                    <input name = "title" value={newMovie.title} onChange={(e) => onChangeHandler(e)} type="text" />
                    <br/>
                    {
                        errors.title?
                        <span>{errors.title.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>Year Released</label>
                    <input name = "yearReleased" value={newMovie.yearReleased} onChange={onChangeHandler} type="number" />
                    <br />
                    {
                        errors.yearReleased ?
                            <span>{errors.yearReleased.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label>Genre</label>
                    <select value={newMovie.genre} name="genre" onChange={onChangeHandler} >
                        <option defaultValue hidden>Select a Genre</option>
                        <option value="Crime Noir">Crime Noir</option>
                        <option value="French Cinema">French Cinema</option>
                        <option value="Romcom">Romcom</option>
                        <option value="Horror">Horror</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Silent Movie">Silent Movie</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Action">Action</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Family">Family</option>
                        <option value="Animated">Animated</option>
                        <option value="Drama">Drama</option>
                    </select>
                    <br />
                    {
                        errors.genre ?
                            <span>{errors.genre.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label>boxArt</label>
                    <input name = "boxArt" value={newMovie.boxArt} onChange={onChangeHandler} type="text" />
                    <br />
                    {
                        errors.boxArt ?
                            <span>{errors.boxArt.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label>Watch Length</label>
                    <input name = "watchLength" value={newMovie.watchLength} onChange={onChangeHandler} type="number" />
                    <br />
                    {
                        errors.watchLength ?
                            <span>{errors.watchLength.message}</span>
                            : null
                    }
                </div>


                <div>
                    <label>Rating</label>
                    <select value={newMovie.rating} name="rating" onChange={onChangeHandler} >
                        <option defaultValue hidden>Select a Rating</option>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG-13</option>
                        <option value="R">R</option>
                        <option value="NC-17">NC-17</option>
                    </select>
                    <br />
                    {
                        errors.rating ?
                            <span>{errors.rating.message}</span>
                            : null
                    }
                </div>


                <div>
                    <label>Actor</label>
                    <input name = "actors" value={newMovie.actors} onChange={onChangeHandler} type="text" />
                    <br />
                    {
                        errors.actors ?
                            <span>{errors.actors.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label>Kid Friendly?</label>
                    <input name = "kidFriendly" checked={newMovie.kidFriendly} onChange={onChangeHandler} type="checkbox" />
                    <br />
                    {
                        errors.kidFriendly ?
                            <span>{errors.kidFriendly.message}</span>
                            : null
                    }
                </div>

                <button>Add a movie!</button>

            </form>
        </div>
    )
}




export default NewMovie;