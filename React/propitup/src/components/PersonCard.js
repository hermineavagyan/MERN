import React from 'react';

const PersonCard = (props)=>{
    const {firstName, lastName, age, hairColor} = props;
    return (
        <div className='personCard'>
            <p className='identity'>{firstName} {lastName}</p> 
            <p></p>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
        </div>
    )
}


export default PersonCard;