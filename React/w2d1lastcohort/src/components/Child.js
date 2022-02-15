import React from 'react';



const Child = (props)=>{
    
    //const {coolObject} = props;
    const{name, email,city, state} = props
    
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
            <hr/>
        </div>
    )
}

export default Child;