import React, {useState} from "react";
//import axios from "axios";
import CreateForm from "../components/CreateForm";
import ProductList from "../components/ProductList";

const Main = (props) =>{
    const [product, setProduct] = useState([]);
    return (
        <div>
            <CreateForm product = {product} setProduct  = {setProduct}/>
            <hr/>
            <ProductList product = {product} setProduct  = {setProduct}/>
        </div>
    )
}
export default Main;