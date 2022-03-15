import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

const ProductList = (props)=>{
    const {removeFromDom,product, setProduct} = props;
    const navigate = useNavigate();

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then((res) => {
                removeFromDom(productId);
                navigate("/"); 
            })
            
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setProduct(res.data);    
        })
        .catch((err) =>{
            console.log(err)
        })
    }, [])
    return (
        <div>
            
            {
                product.map((oneProduct, index)=>{
                    return (
                    <div key = {index}>
                    <div>
                        <Link to = {`/product/${oneProduct._id}`}>Title: {oneProduct.title}</Link>
                        <p>Price: {oneProduct.price}</p>
                        <p>Description:{oneProduct.description}</p>
                        <Link to={`/product/edit/${oneProduct._id}`}>Edit</Link>
                       <p>
                       <button onClick={(e)=>{deleteProduct(oneProduct._id)}}>Delete</button>
                       </p> 
                        </div>
                        <hr/>
                    </div>)
                })
            }
        </div>
    )
}
export default ProductList;