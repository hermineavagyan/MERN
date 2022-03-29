//axios, useEffect, useState, Link

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";


const AllMovies = (props) => {


    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        //Our simple request to get all games! "/api/movies" in our routes!
        axios.get("http://localhost:8000/api/movies")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setMovieList(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    const deleteMovie = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/movies/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setMovieList(movieList.filter(movie => movie._id !== idFromBelow))
            })
            .catch((err)=>console.log(err))
    }


    return (
        <div>
            <Header 
                titleText = "Movie Mania"
                link = "/new"
                linkText = "Add New Movie"
            />

            {
                movieList.map((movie, index) => (
                    <div
                        style={{textAlign:"center"}}
                        key={movie._id}
                    >
                        <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
                        <br/>
                        <img src={movie.boxArt} style={{ width: "150px", height: "150px" }} />
                        <br/>
                        <button onClick={()=>deleteMovie(movie._id)} >Delete</button>
                        <Link to={`/movie/edit/${movie._id}`}>Edit</Link>

                    </div>

                ))
            }


        </div>
    )
}




export default AllMovies;