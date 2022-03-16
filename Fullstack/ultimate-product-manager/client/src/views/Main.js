import React, {useEffect, useState} from "react";
import DisplayAll from "../components/DisplayAll";
import CreateProduct from "../components/CreateProduct";



const Main = (props) => {

    const [productList, setProductList] = useState([]);

    return (

        <div>
        <CreateProduct productList = {productList} setProductList = {setProductList}/>
        <DisplayAll productList = {productList} setProductList = {setProductList}/>
        
        </div>
    )
}
export default Main;