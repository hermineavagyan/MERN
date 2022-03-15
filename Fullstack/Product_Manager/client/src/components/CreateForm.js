import React, {useState} from 'react';
import axios from "axios";

const CreateForm = (props) => {

//const {productList,setProductList} = useState([]);
const {product, setProduct} = props;

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
            setTitle("");
            setPrice("");
            setDescription("");
            setProduct([...product, res.data]);
        })
        .catch((err) =>{
            console.log(err)
        })
}

    return (
        <div>
            <form onSubmit={submitHandler}>
            <label htmlFor='title'>Title</label>
                <input onChange={(e)=>setTitle(e.target.value)} 
                name = "title" value = {title} 
                type = "text"/>
                <label htmlFor='price'>Price</label>
                <input onChange={(e)=>setPrice(e.target.value)} 
                name = "price" value = {price} 
                type = "Number"/>
                <label htmlFor='description'>Description</label>
                <textarea onChange={(e)=>setDescription(e.target.value)} 
                name = "description" value = {description} 
                type = "text"/>
            <input type = "submit" value = "Create a Product"/>
            </form>
        </div>
    )
}
export default CreateForm;
