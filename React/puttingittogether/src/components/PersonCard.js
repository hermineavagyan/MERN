import React, { useState }from 'react';

const PersonCard = (props)=>{

    const {firstName, lastName, age, hairColor} = props;
    const [currentAge, setCurrentAge] = useState(age);

    const ageIncrementer = ()=>{
        setCurrentAge(currentAge + 1);
    }
    return (
        <div className='personCard'>
            <p><h1>{lastName}, {firstName}</h1></p> 
            <p>Age: {currentAge}</p>
            <p>Hair color: {hairColor}</p>
            <p><button onClick={ageIncrementer}>Birthday button for {firstName} {lastName}</button></p>
        </div>
    )
}


export default PersonCard;