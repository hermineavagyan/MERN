import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";






const AllAuthors = (props) => {
    const [authorList, setAuthorList] = useState([]);
    const [likes, setLikes] = useState(0);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err) => console.log(err))

    }, [])

    const likesHandler = (e, authorFromBelow)=>{
        console.log("This is the authorfrombelow likes" + authorFromBelow.likes)
        axios.put(`http://localhost:8000/api/authors/${authorFromBelow._id}`,
        {likes: authorFromBelow.likes}
        //{likes: e.target.value}
        )
        .then((res)=>{
            console.log(res)
            console.log(res.data)
        })
        let authorListCopy = authorList.map((author)=>{
            
            if (author === authorFromBelow){
                let authorCopy = {...authorFromBelow};
                authorCopy.likes = e.target.value;
               
            
            console.log(authorCopy);
            setLikes(e.target.value);
            
            
            return authorCopy;
            }
            else {
                return author;
            }
        })
        setAuthorList(authorListCopy);
        
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
<Link to={"/author/new"}>Create A New Author</Link>

{ 
    
                authorList.map((author, index) => (
                <div key  = {author._id}>
                  
                    <Link to={`/author/${author._id}`}><h4>{author.firstName} {author.lastName}</h4></Link>
                    <p>Quote: {author.quote}</p>
                    <p>Genre: {author.genre}</p>
                    <p>Year of Birth: {author.yearOfBirth}</p>
                    {
                        author.likes>0?
                        <p>Likes: {author.likes}</p>
                        :null

                    }
                    
                    <div> 
                    {
                        author.kidFriendly?
                        <p>A kid friendly author</p>
                        : <p>Not a kid friendly author</p>
                    }
                    
                    </div>
                    <div>
                    <label>Please like this amazing author</label>
                    {/* <input type = "number" 
                        onChange={(e)=>likesHandler(e, author)}
                    /> */}
                    <button onChange={(e)=>likesHandler(e, author)}>Like</button> 
                    
                    
                    {/* <button onClick= {()=>setLikes(likes+1)}>Likes</button> */}
                    </div>
                   <p><Link to={`/author/edit/${author._id}`}>Edit </Link></p> 
                    <button onClick={()=>deleteAuthor(author._id)} > Delete</button>
                    
                    </div> 
                ))               
            }

</div>
    )
    }   
export default AllAuthors;
