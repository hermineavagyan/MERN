//axios, useEffect, useState, Link

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";




const OneMovie = (props) => {


    const [movie, setMovie] = useState({});

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
                //This id is very important. We were able to send it from AllGames to here
            //via our Link element. Our Link uses the path that was set in our Route path in app.js.
        // It looked like this "/movie/:id"
        // The id can be destructured from useParams(). (LOOK AT YOUR DEV TOOLS FOR THIS COMPONENT)
        // We destructure it and use it as our request's params as set in our controller!
        axios.get(`http://localhost:8000/api/movies/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                console.log(res.data.actors);
                setMovie(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])

    const deleteOneMovie = ()=>{
        axios.delete(`http://localhost:8000/api/movies/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/")
                
            })
            .catch((err) => console.log(err))

    }


    return (
        <div style={{ textAlign: "center" }}>
            <Header 
                titleText = {movie.title}
                link = "/"
                linkText = "Return Home"
            />

            <p>{movie.genre}</p>
            <img src={movie.boxArt} style={{ width: "150px", height: "150px" }}/>
            <p>{movie.watchLength}</p>
            <p>{movie.rating}</p>
            <h2>Actors</h2>
            {
                // this shorthand is checking to make sure actors exist before rendering
                // it saves us from getting a "property undefined error"
                movie.actors?.map((actor, index)=>(
                    <div key={actor._id} style={{border:"2px double black", width:"50%", margin:"auto"}}>
                        <p>Name: {actor.name}</p>
                        <p>Age: {actor.age}</p>
                        {
                            actor.alive?
                            <p>They live!!!</p>
                            :<p>You dead...</p>
                        }
                    </div>
                ))
            }

            <div>Kid Friendly
                {
                    movie.kidFriendly?
                    <p>Okay for kids!!!</p>
                    :<p>No kiddies allowed!!!!!!</p>
                }
            </div>
            <p>{movie.yearReleased}</p>
            <button onClick={deleteOneMovie}>Delete</button>

        </div>
    )
}




export default OneMovie;