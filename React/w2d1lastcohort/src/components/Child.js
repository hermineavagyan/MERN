import React, {useState} from 'react';



const Child = (props)=>{
    
    //const {coolObject} = props;
    const{name, email,city, state, netWorth,likes} = props

    const[currentLikes, setCurrentLikes] = useState(likes);
    const[currentMoney, setCurrentMoney] = useState(netWorth);
    //const[hasLiked, setHasLiked] = useState(false);
    const likeHandler = (e) =>{
        setCurrentLikes(currentLikes + 1);
    }
    const addMoney = (e) =>{
        setCurrentMoney(currentMoney + 1000);
    }
    const subtractMoney = (e) =>{
        setCurrentMoney(currentMoney - 1000);
    }
    
    return (
        <div>
            {/* <p>{props.coolObject[0]}</p>
            <p>{props.coolObject[1]}</p>
            <p>{coolObject.email}</p>
            <p>{coolObject.city}</p>
            <p>{coolObject.state}</p> */}
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Networth: {currentMoney}</p>
            <p><button onClick = {(e) => addMoney()}>Add Money</button></p>
            <p><button onClick = {(e) =>subtractMoney()}>Subtract Money</button></p>
            <p>Likes {currentLikes}</p>
            <p><button onClick = {(e) => likeHandler()}>Like</button></p>
            <hr/>
        </div>
    )
}

export default Child;