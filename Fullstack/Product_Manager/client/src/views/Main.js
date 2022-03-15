import React, {useState} from "react";
//import axios from "axios";
import CreateForm from "../components/CreateForm";
import ProductList from "../components/ProductList";

const Main = (props) =>{
    const [product, setProduct] = useState([]);

    const removeFromDom = (productId) => {
        setProduct(product.filter(product => product._id != productId)); //We could also write this in our PersonList component
    }
    return (
        <div>
            <CreateForm product = {product} setProduct  = {setProduct}/>
            <hr/>
            <ProductList product = {product} setProduct  = {setProduct} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;