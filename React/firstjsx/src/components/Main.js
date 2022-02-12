import React from 'react';


const Main = (props)=>{
    const {text} = props;
    
    const list  = ["Learn React","Climb","Run a Marathon","Feed the dogs"];

    return (
        
        <div className='main'>
        <div>
        <h2>{text}</h2>
        <li>{list[0]}</li>
        <li>{list[1]}</li>
        <li>{list[2]}</li>
        <li>{list[3]}</li>
        </div>
        

        </div>
    )
}
export default Main;