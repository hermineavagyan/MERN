import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Counter from "./Counter";
import { Paper, Card, CardHeader, CardContent } from '@material-ui/core';






const AllAuthors = (props) => {
    const [authorList, setAuthorList] = useState([]);
    const [rating, setRating] = useState(0);
    const[like, setLike] = useState(0);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err) => console.log(err))

    }, [])
    const ratingHandler = (e, author)=>{
        //e.preventDefault();
        author.rating= e.target.value;
        setRating(e.target.value);
    }

    // const likesHandler = (e, authorFromBelow)=>{
    //     console.log("This is the authorfrombelow likes" + authorFromBelow.likes)
    //     axios.put(`http://localhost:8000/api/authors/${authorFromBelow._id}`,
    //     {likes: authorFromBelow.likes}
    //     //{likes: e.target.value}
    //     )
    //     .then((res)=>{
    //         console.log(res)
    //         console.log(res.data)
    //     })
    //     let authorListCopy = authorList.map((author)=>{
            
    //         if (author === authorFromBelow){
    //             let authorCopy = {...authorFromBelow};
    //             authorCopy.likes = e.target.value;
               
            
    //         console.log(authorCopy);
    //         //setLikes(e.target.value);
    //         setLikes(likes => likes + 1);
            
            
    //         return authorCopy;
    //         }
    //         else {
    //             return author;
    //         }
    //     })
    //     setAuthorList(authorListCopy);
        
    // }
    var cardStyle = {
        display: 'block',
        width: '25vw',
        transitionDuration: '0.3s',
        height: '10vw',
        background: 'linear-gradient(45deg, #a7ffeb 30%, #00897b 90%)'
    }

    const deleteAuthor = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthorList(authorList.filter(author => author._id !== idFromBelow))
            })
            .catch((err)=>console.log(err))
    }


    return (
        
<div>
            <header >
                <h3>Poeple Who Changed the World</h3>
                <Link to={"/author/new"}>Create A New Author</Link>
            </header>
            <table style={{margin:"auto", border:"1px solid black"}}>
            <thead style={{backgroundColor:"lightgreen", color:"black"}}>
                    <tr className = "border-dark">
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Quote</th>
                        <th>Year of Birth</th>
                        <th>Rating</th>
                        <th>Kidfriendly?</th>
                        <th>Action Available</th>
                        

                        </tr>
                        </thead>
                        <tbody class = "border-dark">
                        {
                        authorList.map((author, index) => (
                <tr key  = {author._id}>
                <td>  <Link to={`/author/${author._id}`}><h6>{author.firstName} {author.lastName}</h6></Link></td>
                <td>{author.genre}</td>
                <td>
                {/* <Card elevation = {3} style={{background: 'linear-gradient(45deg, #a7ffeb 30%, #00897b 90%)'}}>{author.quote}</Card> */}
                <Card elevation = {3} style={cardStyle}>
                
                {author.quote}
                </Card>
               
                </td>
                <td>{author.yearOfBirth}</td>
                <td>
                    {
                    author.rating>0?
                    <p>Author rating: {author.rating}</p>
                    :<p>Please rate this author</p>
                    
                    }
                    <input type = "number"
                        className="form-control mx-auto text-center my-3 border border-3 p-2"
                        placeholder="Rating"
                        onChange={(e)=>ratingHandler(e, author)}
                    />
                </td>
                <td>
                    {
                    author.kidFriendly?
                    <p>Yes</p>
                    :<p>No</p>
                    }
                </td>
                
                {/* <input type = "number"
                        className="form-control mx-auto text-center my-3 border border-3 p-2"
                        placeholder="Rating"
                        onChange={(e)=>ratingHandler(e, author)}
                    /> */}
                <td> 
                <p>
                    <Link to={`/author/edit/${author._id}`}><button>Edit </button> </Link>
                    <button onClick={()=>deleteAuthor(author._id)}> Delete</button>
                    <Counter>Like</Counter>
                    </p>
                    </td>
                </tr>))
                        }
                        </tbody>
            </table>


</div>
    )
    }   
export default AllAuthors;
