import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

const Create = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [genre, setGenre] = useState("");
    const [quote, setQuote] = useState("");
    const [likes, setLikes] = useState(0);
    const [kidFriendly, setKidFriendly] = useState(false);
    const [yearOfBirth, setYearOfBirth] = useState(0);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors",
        {
            firstName, // short-hand for firstName:firstName
            lastName,
            genre, //the getter MUST MATCH the field name in schema to write it this way
            quote,
            likes,
            kidFriendly,
            yearOfBirth
        })
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

    return (
        <div>
         <Link to={"/"}>Home</Link>
        <header>Create new Author
       
        </header>
        <form onSubmit={submitHandler}>
                <div className='form-fields'>
                    <label>First Name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName}  type="text" />
                    {
                        errors.firstName?
                        <span>{errors.firstName.message}</span>
                        :null
                    }
                
                </div>
                <div className='form-fields'>
                    <label>Last Name</label>
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName}  type="text" />
                    {
                        errors.lastName?
                        <span>{errors.lastName.message}</span>
                        :null
                    }
                </div>
                <div className='form-fields' >
                    <select onChange={(e) => setGenre(e.target.value)} value={genre} name="genre" >
                        <option defaultValue>Select a Genre</option>
                        
                        <option value="Tragedy">Tragedy</option>
                        <option value="Children's Literature">Children's Literature</option>
                        <option value="Fictional Prose">Fictional Prose</option>
                        <option value="Fiction">Fiction</option>
                        
                    </select>
                    {
                        errors.genre?
                        <span>{errors.genre.message}</span>
                        :null
                    }
                </div>
                <div className='form-fields'>
                    <label>Quote</label>
                    <input onChange={(e) => setQuote(e.target.value)} value={quote}  type="text" />
                </div>

                <div className='form-fields'>
                    <label>Number of likes</label>
                    <input onChange={(e) => setLikes(e.target.value)} value={likes}  type="number" />
                </div>
                <div className='form-fields'>
                    <label>Kid Friendly?</label>
                    <input onChange={(e) => setKidFriendly(e.target.checked)} checked={kidFriendly} type="checkbox" />
                    {
                        errors.kidFriendly ?
                            <span>{errors.kidFriendly.message}</span>
                            : null
                    }
                </div>


                <div className='form-fields'>
                    <label>Year of Birth</label>
                    <input onChange={(e) => setYearOfBirth(e.target.value)} value={yearOfBirth}  type="number" />
                    {
                        errors.yearOfBirth ?
                            <span>{errors.yearOfBirth.message}</span>
                            : null
                    }
                </div>
                
                <button className='submit-input'>Add an author!</button>
        </form>

        </div>
    )
}
export default Create; 