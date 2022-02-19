import React,{useState} from 'react';

const Form = (props)=>{

    
const {firstName, setFirstName, lastName, setLastName, email,setEmail, password, setPassword,confirmPassword, setConfirmPassword} = props;
    return (

        <div>
            <form>
                <div className='inputDataDivStyle'>
                    <label htmlFor='firstName'>First Name: </label>
                    <input onChange={(e) =>{
                        
                        setFirstName(e.target.value)
                        
                        
                    }}   type = "text" name='firstName'/>
                    {
                        firstName.length < 2 ?
                        <p>First name should be at least 2 characters</p>
                        :null
                    } 
                </div>
                <div className='inputDataDivStyle'>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input onChange={(e)=>{
                        setLastName(e.target.value)
                    }} type = "text" name='lastName'/>
                    {
                        lastName.length < 2 ?
                        <p>Last name should be at least 2 characters</p>
                        :null
                    }
                </div>
                <div className='inputDataDivStyle'>
                    <label htmlFor='email'>Email: </label>
                    <input onChange={(e)=>{
                        setEmail(e.target.value)
                    }}type = "text" name='email'/>
                    {
                        email.length < 2 ?
                        <p>Email should be at least 2 characters</p>
                        :null
                    }
                </div>
                <div className='inputDataDivStyle'>
                    <label htmlFor='password'>Password: </label>
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    type = "text" name='password'/>
                    {
                        password.length < 2 ?
                        <p>Password should be at least 2 characters</p>
                        :null
                    }
                </div>
                <div className='inputDataDivStyle'>
                    <label htmlFor='confirmPassword'> Confirm Password: </label>
                    <input onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                    }}
                    type = "text" name='confirmPassword'/>
                    {
                        confirmPassword  !== password  ?
                        <p>Passwords should match</p>
                        :null
                    }
                </div>
                
            </form>

        </div>
    )
}
export default Form;