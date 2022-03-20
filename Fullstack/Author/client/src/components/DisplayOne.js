import React from "react";
import axios from "axios";
import {Link, useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

const DisplayOne = (props) =>{
    const[author, setAuthor] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthor(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[id])
    const deleteAuthor = ()=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
                
            })
           
            .catch((err) => console.log(err))

    }



    return(
        <div>
        <header><h4>{author.firstName} {author.lastName}</h4></header>
            <Link to={"/"}>Home</Link>
                    <p>Quote: {author.quote}</p>
                    <p>Year of Birth: {author.yearOfBirth}</p>

                    <div> 
                    {
                        author.likes?
                        <p>Likes: {author.likes}</p>
                        : <p>This author does not have any likes yet</p>
                    }
                    </div>
                    
                    <div> 
                    {
                        author.kidFriendly?
                        <p>A kid friendly author</p>
                        : <p>Not a kid friendly author</p>
                    }
                    </div>
                    <Link to={`/author/edit/${author._id}`}><button>Edit</button></Link>
                    <button onClick={deleteAuthor}>Delete</button>
                    
        </div>
    )
}
export default DisplayOne;