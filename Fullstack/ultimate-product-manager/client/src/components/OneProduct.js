import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const OneProduct = (props) => {

    const {id} = useParams();// this is the param we had in the App.js OneProduct component route
    const [oneProduct, setOneProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) =>{
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data)
            })
            .catch((err) => console.log(err))
    },[])
    
    return (

        <div className="oneProduct-component">
           <h2>{oneProduct.title}</h2>
           <p>Pirce: {oneProduct.price}</p>
           <p>Description: {oneProduct.description}</p>
        </div>
    )
}
export default OneProduct;