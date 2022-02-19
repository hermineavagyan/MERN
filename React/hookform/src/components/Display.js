import React, {useState} from "react";
const formDataDivStyle = {
    textAlign: "left", 
    width: "450px", 
    margin: "auto",
  }
const Display = (props)=>{
    const {firstName, setFirstName, lastName, setLastName, email,setEmail, password, setPassword,confirmPassword, setConfirmPassword} = props;

    return (
       
           
        <div style={ formDataDivStyle }>
        <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
        <p>
          <label>First Name: </label>{ firstName }
        </p>
        <p>
          <label>Last Name: </label>{ lastName }
        </p>
        <p>
          <label>Email: </label>{ email }
        </p>
        <p>
          <label>Password: </label>{ password }
        </p>
        <p>
          <label>Confirm Password: </label>{ confirmPassword }
        </p>
      </div>
   
       
    )
}
export default Display;