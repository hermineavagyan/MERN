import React, {useState} from 'react';
import axios from "axios";

const Form = (props) => {

//const {productList,setProductList} = useState([]);

const [title, setTitle] = useState("");
const [price, setPrice] = useState(0);
const [description, setDescription] = useState("");

const submitHandler = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/products',{
       title,
       price,
       description    
    })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
        .catch((err) =>{
            console.log(err)
        })
        //setTitle(res.data.title);
    // setProductList ("")
}

    return (
        <div>
            <form onSubmit={submitHandler}>
            <label htmlFor='title'>Title</label>
                <input onChange={(e)=>setTitle(e.target.value)} 
                // value = {title} 
                type = "text"/>
                <label htmlFor='price'>Price</label>
                <input onChange={(e)=>setPrice(e.target.value)} 
                // value = {price} 
                type = "Number"/>
                <label htmlFor='description'>Description</label>
                <textarea onChange={(e)=>setDescription(e.target.value)} 
                // value = {description} 
                type = "text"/>
            <input type = "submit"/>
            </form>
        </div>
    )
}
export default Form;
